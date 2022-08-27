import express from "express"
import router from "./src/routes/index.routes"
import { sequelize } from "./src/db"
import { Models } from "./src/models/models"
import fileUpload from "express-fileupload"
import "dotenv/config"
import cors from "cors"
import { errorHandler } from "./src/middleware/ErrorHandleMiddleware"
import chalk from "chalk"
import path from "path"

const app = express()
const PORT = process.env.PORT || 5100

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(`${__dirname}/src`, 'static')))
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()        
        console.log(chalk.cyanBright('Successful conection to data base'));
        app.listen(PORT, () => { console.log(chalk.cyanBright(`Server has been started on port ${PORT}`)) })

    }
    catch (e) {
        console.log(e);
    }
}

start()