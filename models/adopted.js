module.exports = (sequelize, DataTypes) => {
  const Adopted = sequelize.define('Adoptable', {
    dogName: DataTypes.STRING,
    adopted: DataTypes.BOOLEAN,
  })
  return Adopted
}