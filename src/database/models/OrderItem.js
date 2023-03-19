module.exports = (sequelize, DataTypes) => {
    let alias = "OrderItem";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "orders",
                key: "id"
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "products",
                key: "id"
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
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
        tableName: "orderitems",
    }

    const OrderItem = sequelize.define(alias, cols, config);

    OrderItem.associate = (models) => {
        OrderItem.belongsTo(models.Order, {
            as: "order",
            foreignKey: "orderId"
        })

        OrderItem.belongsTo(models.Product, {
            as: "product",
            foreignKey: "productId"
        })
    }

    return OrderItem;
}