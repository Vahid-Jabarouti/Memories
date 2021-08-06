import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoutes from './routes/posts.js';

const app = express();

app.use('/posts', PostRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://vahid:vahid2357@cluster0.4pk3j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true})
    .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
    .catch(() => console.log("Connection failed!"));



