module.exports = (sequelize, DataTypes) => {
    let alias = "ProductImage";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: DataTypes.BLOB,
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
        tableName: "productsimages"
    };

    const ProductImage = sequelize.define(alias, cols, config);

    ProductImage.associate = (models) => {
        ProductImage.belongsTo(models.Product, {
            as: "product",
            foreignKey: "productImageId"
        })
    }

    return ProductImage;
}