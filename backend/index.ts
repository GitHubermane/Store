import express from "express";
import router from "./src/routes/App.routes"
import { db } from "./src/db"
import {Models} from "./src/models/models"
import * as dotenv from "dotenv"

dotenv.config({path: `${__dirname}/src/.env`})

const app = express()
const PORT = process.env.PORT || 5100

app.use('/api', router)

const start = async () => {
    try {
        await db.authenticate()
        await db.sync()
        
        console.log('Successful conection to data base');
        app.listen(PORT, () => { console.log(`Server has been started on port ${PORT}`) })
        
    }
    catch (e) {
        console.log(e);
    }
}

start()