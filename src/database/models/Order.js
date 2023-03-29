module.exports = (sequelize, DataTypes) => {
    let alias = "Order";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            }
        },
        total: {
            type: DataTypes.DECIMAL(8, 2),
            allowNull: false
        },
        paymentMethod: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        shippingMethod: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        delivered: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    };

    let config = {
        tableName: "orders",
        paranoid: true
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })

        Order.hasMany(models.OrderItem, {
            as: "orderItems",
            foreignKey: "orderId"
        })
    }

    return Order
}