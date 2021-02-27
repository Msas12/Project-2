module.exports = (sequelize, DataTypes) => {
  const Adoptable = sequelize.define('Adoptable', {
    dogName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    gender: DataTypes.STRING,
    temper: DataTypes.STRING,
    spayed: DataTypes.BOOLEAN,
    adopted: DataTypes.BOOLEAN,
    pending: DataTypes.BOOLEAN
  })
  return Adoptable
}

