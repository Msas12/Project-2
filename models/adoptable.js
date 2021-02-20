module.exports = (sequelize, DataTypes) => {
  const adoptable = sequelize.define('', {
    dogName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    temper: DataTypes.STRING,
    spayed: DataTypes.BOOLEAN,
    adopted: DataTypes.BOOLEAN
  });
  return adoptable;
};

