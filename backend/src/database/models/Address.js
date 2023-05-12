module.exports = (sequelize, DataTypes) => {
    let alias = "Address";
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
        addresse: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        province: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(100),
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
        tableName: "addresses",
    };

    const Address = sequelize.define(alias, cols, config);

    Address.associate = (models) => {
        Address.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })
    }

    return Address;
}
