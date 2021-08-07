import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "./logger";
import Routes from "./routes";
const path = require('path');

import firebase from 'firebase';

// firebase init goes here
const firebaseConfig = {
    apiKey: "AIzaSyDYF75qMG8ux1zMNShDVmGV2OqdwW5KyvI",
    authDomain: "weather-app-api-37247.firebaseapp.com",
    projectId: "weather-app-api-37247",
    storageBucket: "weather-app-api-37247.appspot.com",
    messagingSenderId: "110183422238",
    appId: "1:110183422238:web:09300d56de51f91249110f",
    measurementId: "G-BG25P5R9NB"
};
firebase.initializeApp(firebaseConfig);

class App {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public users: any[];

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
        this.express.use(express.static(process.cwd() + "/weather-app/dist/"));
    }

    private routes(): void {

        this.express.get("/", (req, res, next) => {
            res.sendFile(process.cwd() + "/weather-app/dist/index.html");
        });

        // user route
        this.express.use("/api", Routes);

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!");
        });
    }
}

export default new App().express;