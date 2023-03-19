module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        userImageId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "usersImages",
                key: "id"
            }
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
        tableName: "users"
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {
        User.belongsTo(models.UserImage, {
            as: "image",
            foreignKey: "userImageId"
        })

        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "userId"
        })

        User.hasMany(models.Order, {
            as: "orders",
            foreignKey: "userId"
        })

        User.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "userId"
        })

        User.belongsToMany(models.Product, {
            as: "favoritesProducts",
            foreignKey: "userId",
            otherkey: "productId",
            through: "favoritesproducts",
        })

        User.belongsToMany(models.Product, {
            as: "productsSalved",
            foreignKey: "userId",
            otherkey: "productId",
            through: "savedproducts",
        })
    }

    return User
}