module.exports = (sequelize, DataTypes) => {
    let alias = "CartProduct";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "carts",
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
        tableName: "cartproducts"
    }

    const CartProduct = sequelize.define(alias, cols, config);

    CartProduct.associate = (models) => {
        CartProduct.belongsTo(models.Cart, {
            as :"cart",
            foreignKey : "cartId"
        })

        CartProduct.belongsTo(models.Product, {
            as: "product",
            foreignKey : "productId"
        })
    }

    return CartProduct;
}