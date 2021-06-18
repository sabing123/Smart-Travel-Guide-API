const express =  require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const hotelRouter = require('./routes/hotel');
const uploadRouter = require('./routes/uploads');
const adventurousplaceRouter = require('./routes/adventurousplace');
const historicalplacesRouter = require('./routes/historicalplace');
const TouristguidesRouter = require('./routes/touristguide');
const cabdetailsRouter = require('./routes/cabdetail');
const cors = require('cors');

mongoose
	.connect(process.env.URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then((db) => {
		console.log('Successfully Connected to mongodb server');
    });
    
    const app = express();
app.options('*',cors());
app.use(cors());
app.use(express.json());
app.use('/upload', uploadRouter);
app.use('/hotel',hotelRouter);
app.use('/adventurousplace',adventurousplaceRouter);
app.use('/historicalplace',historicalplacesRouter);
app.use('/touristguide',TouristguidesRouter);
app.use('/cabdetail',cabdetailsRouter);
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

(err,req,res,next) => {
    err.status = 500;
    err.json(err.message);aa
}


app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
})