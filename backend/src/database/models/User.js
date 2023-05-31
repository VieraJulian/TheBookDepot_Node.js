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
        User.hasOne(models.UserImage, {
            as: "image",
            foreignKey: "userId"
        })

        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "userId"
        })

        User.hasMany(models.Order, {
            as: "orders",
            foreignKey: "userId"
        })
    }

    return User
}