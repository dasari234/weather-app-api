import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger";
import axios from 'axios';

class Weather {

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
    }

    private routes(): void {
        // request to get cities
        this.express.get("/current/:city", async (req, res) => {
            this.logger.info("url:" + req.url);
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=5c4aaf195245409c8ef152631210608&q=${req.params.city}&aqi=no`);
                res.send(response.data)
            } catch (error) {
                console.error(error);
            }
        });

        this.express.get("/forecast/:city", async (req, res) => {
            this.logger.info("url:" + req.url);
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=5c4aaf195245409c8ef152631210608&q=${req.params.city}&days=1&aqi=no&alerts=no`);
                res.send(response.data)
            } catch (error) {
                console.error(error);
            }
        });

        this.express.get("/search/:city", async (req, res) => {
            this.logger.info("url:" + req.url);
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=5c4aaf195245409c8ef152631210608&q=${req.params.city}`);
                res.send(response.data)
            } catch (error) {
                console.error(error);
            }
        });
    }
}

export default new Weather().express;