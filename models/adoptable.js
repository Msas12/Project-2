module.exports = (sequelize, DataTypes) => {
  const adoptable = sequelize.define('', {
    dog_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    temper: DataTypes.STRING,
    spayed: DataTypes.BOOLEAN,
    adopted: DataTypes.BOOLEAN
  });
  return adoptable;
};

