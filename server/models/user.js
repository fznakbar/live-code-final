'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : { msg : 'Name Cannot Be Empty'},
        notNull : { msg : 'Name Cannot Be Empty'}
      }
    },
    password: {
     type : DataTypes.STRING,
     allowNull : false,
      validate : {
        notEmpty : { msg : 'Name Cannot Be Empty'},
        notNull : { msg : 'Name Cannot Be Empty'}
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};