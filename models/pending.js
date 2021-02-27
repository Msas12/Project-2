module.exports = (sequelize, DataTypes) => {
  const Pending = sequelize.define('Pending', {
    dogName: DataTypes.STRING,
    pending: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    adopted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
  return Pending
}

