module.exports = (sequelize, DataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    editorial: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false
    },
    collection: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    numberPages: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    format: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    isbn: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    weight: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    edition: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    bestSellers: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    stock: {
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
    tableName: "products",
  }

  const Product = sequelize.define(alias, cols, config)

  Product.associate = (models) => {
    Product.hasOne(models.ProductImage, {
      as: "productImage",
      foreignKey: "productId"
    })

    Product.hasMany(models.OrderItem, {
      as: "orderItems",
      foreignKey: "productId"
    })

    Product.hasMany(models.CartProduct, {
      as: "cartProducts",
      foreignKey: "productId"
    })

    Product.belongsToMany(models.User, {
      as: "favoritesProducts",
      foreignKey: "productId",
      otherkey: "userId",
      through: "favoritesproducts",
    })

    Product.belongsToMany(models.User, {
      as: "productsSalved",
      foreignKey: "productId",
      otherkey: "userId",
      through: "savedproducts",
    })
  }

  return Product
}