import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import statusStudents from '../start/status-students';


module.exports = (app:Application) =>{
    app.use(express.json());
    app.use(compression());
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/api/statusStudent", statusStudents);

}