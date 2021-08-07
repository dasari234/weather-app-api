import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from 'cors';
import { Logger } from "../logger";
import Weather from "./weather";
import IpAddress from './ipAddress';

const allowedOrigins = ['http://localhost:8080', 'http://localhost:4200'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

class Routes {

    public express: express.Application;
    public logger: Logger;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors(options));
    }

    private routes(): void {
        // weather route
        this.express.use("/weather", Weather);
        this.express.use("/ip", IpAddress);
    }
}

export default new Routes().express;