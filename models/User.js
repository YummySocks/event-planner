const { Sequelize, Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt')

class User extends Model {
    // checks the password on login
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
}
// values for the user
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        users_unique: {
            type: DataTypes.STRING,
            defaultValue: UUIDV4,
            allowNull:false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },
    {
        hooks: {
            // "middleware" that encrypts the password inputted on signup
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
              },
              beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
              }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'

    }
)



module.exports = User