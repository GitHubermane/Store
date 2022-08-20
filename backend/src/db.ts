import { Sequelize } from "sequelize";

export const db = new Sequelize(
    // String(process.env.DB_NAME),
    // String(process.env.DB_USER),
    // String(process.env.DB_PASSWORD),
    // {
    //     dialect: 'postgres',
    //     host: String(process.env.DB_HOST),
    //     port: Number(process.env.DB_PORT)
    // }

    'online_store',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)