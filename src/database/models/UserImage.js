module.exports = (sequelize, DataTypes) => {
    let alias = "UserImage";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
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
        tableName: "usersimages"
    };

    const UserImage = sequelize.define(alias, cols, config);

    UserImage.associate = (models) => {
        UserImage.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })
    }

    return UserImage;
}