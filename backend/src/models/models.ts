import { DataTypes } from "sequelize";
import { sequelize } from "../db";


export const Models = {
    User: sequelize.define('user',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            email: { type: DataTypes.STRING, unique: true },
            password: { type: DataTypes.STRING },
            role: { type: DataTypes.STRING, defaultValue: 'USER' },
            isActivated: { type: DataTypes.BOOLEAN, defaultValue: false},
            activationLink: { type: DataTypes.STRING, unique: true }
        }
    ),

    Token: sequelize.define('token',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            userId: { type: DataTypes.INTEGER, primaryKey: true },
            refreshToken: { type: DataTypes.STRING, allowNull: false},
        }
    ),

    Basket: sequelize.define('basket',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        }
    ),

    BasketDevice: sequelize.define('basketDevice',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

        }
    ),

    Device: sequelize.define('device',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            brandId: { type: DataTypes.INTEGER, primaryKey: true },
            typeId: { type: DataTypes.INTEGER, primaryKey: true },
            name: { type: DataTypes.STRING, allowNull: false, unique: true },
            price: { type: DataTypes.INTEGER, allowNull: false },
            img: { type: DataTypes.STRING, allowNull: false },
            rating: { type: DataTypes.INTEGER, defaultValue: 0 },
        }
    ),

    DeviceInfo: sequelize.define('deviceInfo',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            // deviceId: { type: DataTypes.INTEGER, primaryKey: true },
            title: { type: DataTypes.STRING, allowNull: false },
            describe: { type: DataTypes.STRING, allowNull: false }
        }
    ),

    Type: sequelize.define('type',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING, allowNull: false, unique: true }
        }
    ),

    Brand: sequelize.define('brand',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING, allowNull: false, unique: true }
        }
    ),

    Rating: sequelize.define('rating',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            rate: { type: DataTypes.STRING, allowNull: false }
        }
    ),

    TypeBrand: sequelize.define('typeBrand',
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

Models.Device.hasMany(Models.DeviceInfo, { as: 'info' })
Models.DeviceInfo.belongsTo(Models.Device)

Models.Type.belongsToMany(Models.Brand, { through: Models.TypeBrand })
Models.Brand.belongsToMany(Models.Type, { through: Models.TypeBrand })