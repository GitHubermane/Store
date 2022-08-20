import { DataTypes } from "sequelize/types";
import { db } from "../db";


export const Models = {
    User: db.define('user',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            email: { type: DataTypes.STRING, unique: true },
            password: { type: DataTypes.STRING },
            role: { type: DataTypes.STRING, defaultValue: 'USER' },
        }
    ),

    Basket: db.define('basket',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        }
    ),
    BasketDevice: db.define('basketDevice',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

        }
    ),

    Device: db.define('device',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING, allowNull: false, unique: true },
            price: { type: DataTypes.INTEGER, allowNull: false },
            img: { type: DataTypes.STRING, allowNull: false },
            rating: { type: DataTypes.INTEGER, defaultValue: 0 },
        }
    ),

    Type: db.define('type',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING, allowNull: false, unique: true }
        }
    ),

    Brand: db.define('brand',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING, allowNull: false, unique: true }
        }
    ),

    Rating: db.define('rating',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            rate: { type: DataTypes.STRING, allowNull: false }
        }
    ),

    DeviceInfo: db.define('deviceInfo',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title: { type: DataTypes.STRING, allowNull: false },
            describe: { type: DataTypes.STRING, allowNull: false }
        }
    ),

    TypeBrand: db.define('typeBrand',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

        }
    )
}

Models.User.hasOne(Models.Basket)
Models.Basket.belongsTo(Models.User)

Models.User.hasMany(Models.Rating)
Models.Rating.belongsTo(Models.User)

Models.Basket.hasMany(Models.DeviceInfo)
Models.DeviceInfo.belongsTo(Models.Basket)

Models.Type.hasMany(Models.Device)
Models.Device.belongsTo(Models.Type)

Models.Brand.hasMany(Models.Device)
Models.Device.belongsTo(Models.Brand)

Models.Device.hasMany(Models.Rating)
Models.Rating.belongsTo(Models.Device)

Models.Device.hasMany(Models.BasketDevice)
Models.BasketDevice.belongsTo(Models.Device)

Models.Device.hasMany(Models.DeviceInfo)
Models.DeviceInfo.belongsTo(Models.Device)

Models.Type.belongsToMany(Models.Brand, { through: Models.TypeBrand })
Models.Brand.belongsToMany(Models.Type, { through: Models.TypeBrand })