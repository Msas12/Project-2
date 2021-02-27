module.exports = (sequelize, DataTypes) => {
  const Success = sequelize.define('Success', {
    dogName: DataTypes.STRING,
    adopted: DataTypes.BOOLEAN,
  })
  return Success
}