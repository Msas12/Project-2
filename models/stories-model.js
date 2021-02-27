module.exports = (sequelize, DataTypes) => {
  const Stories = sequelize.define('Stories', {
    dogName: DataTypes.STRING,
    body: DataTypes.STRING,
    created_at: DataTypes.DATE,
  });
  return Stories
}
