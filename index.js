import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import db from './config/db.js';
import router from './routes/DefaulteRoute.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/API' , router);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/API`);
});
