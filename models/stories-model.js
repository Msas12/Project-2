module.exports = (sequelize, DataTypes) => {
  const Stories = sequelize.define('Stories', {
    dogName: DataTypes.STRING,
    body: DataTypes.TEXT,
    created_at: DataTypes.DATE,
  });
  return Stories
}
