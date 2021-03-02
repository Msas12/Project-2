module.exports = (sequelize, DataTypes) => {
  const Stories = sequelize.define('Stories', {
    dogName: DataTypes.STRING,
    body: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
  });
  return Stories
}
