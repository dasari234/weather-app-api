import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger";
import axios from 'axios';

class IpAddress {

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
        this.express.get("/address", async (req, res) => {
            this.logger.info("url:" + req.url);
            try {
                const response = await axios.get(`https://checkip.amazonaws.com/`);
                res.send(response.data)
            } catch (error) {
                console.error(error);
            }
        });
    }
}

export default new IpAddress().express;