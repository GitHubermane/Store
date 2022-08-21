import express from "express";
import router from "./src/routes/index.routes"
import { sequelize } from "./src/db"
import { Models } from "./src/models/models"
import "dotenv/config"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 5100

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Successful conection to data base');
        app.listen(PORT, () => { console.log(`Server has been started on port ${PORT}`) })

    }
    catch (e) {
        console.log(e);
    }
}

start()