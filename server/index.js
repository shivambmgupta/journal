import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/route.js';
import developer from './model/dev.js';
import * as Const from './constants/consts.js';
import cors from 'cors';

dotenv.config(); 
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

app.get("/", (req, res) => {
    res.send(Const.GREET);
});

app.get('/about-developer', (req, res) => {
    res.status(200).send(developer);
})

app.use("/user", router);

const PORT_NUMBER = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log(Const.DB_CONNECTED)
        app.listen(PORT_NUMBER, () => {
            console.log(Const.SERVER_UP)
        })
    })
    .catch(() => {
        console.log(Const.DB_CONNECTION_ERR);
    });

