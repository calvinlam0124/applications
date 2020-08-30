// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {});
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//   return User;
// };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User extends sequelize.Model {
}
module.exports = () => {return User}

// exports.User = User;
// class Project extends sequelize_1.Model {
// }
// exports.Project = Project;

// export const User = sequelize.define('User', {
//   firstName: DataTypes.STRING,
//   lastName: DataTypes.STRING,
//   email: DataTypes.STRING
// }, {});
// User.associate = function(models) {
//   // associations can be defined here
// };
// module.exports.User = User;
