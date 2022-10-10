import { Model, InferAttributes, InferCreationAttributes, DataTypes, ForeignKey, QueryInterface } from 'sequelize';
import { sequelize } from '../db';
import { Device } from '../Device/Device.model';
import { User } from '../User/User.model';

export class Cart extends Model<InferAttributes<Cart>, InferCreationAttributes<Cart>> {
    declare id?: number
    declare userId: ForeignKey<User['id']>
    declare total: number
}

Cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'cart'
    }
)

export class CartDevice extends Model<InferAttributes<CartDevice>, InferCreationAttributes<CartDevice>> {
    declare id?: number
    declare cartId: ForeignKey<Cart['id']>
    declare deviceId: ForeignKey<Device['id']>
    declare name: string
    declare quantity: number
    declare price: number
    declare img: string
}

CartDevice.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        quantity: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        indexes: [
            {
                unique: true,
                fields: ['cartId', 'deviceId']
            }
        ],
        tableName: 'cart_device'

    }
)


Cart.hasMany(CartDevice, { foreignKey: 'cartId', as: 'devices' })
CartDevice.belongsTo(Cart, { foreignKey: 'cartId' })