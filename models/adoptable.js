module.exports = (sequelize, DataTypes) => {
  const Adoptable = sequelize.define('Adoptable', {
    dogName: DataTypes.STRING,
    img: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    gender: DataTypes.STRING,
    temper: DataTypes.STRING,
    spayed: DataTypes.BOOLEAN,
    adopted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
  return Adoptable
}

