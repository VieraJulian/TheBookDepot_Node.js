module.exports = (sequelize, DataTypes) => {
    let alias = "Cart";
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
        tableName: "carts"
    }

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = (models) => {
        Cart.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })

        Cart.hasMany(models.CartProduct, {
            as: "cartProducts",
            foreignKey: "cartId"
        })
    }

    return Cart;
}