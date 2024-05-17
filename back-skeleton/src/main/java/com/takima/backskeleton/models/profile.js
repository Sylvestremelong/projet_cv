module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      banner: DataTypes.STRING,
      experience: DataTypes.JSON,
      education: DataTypes.JSON,
      skills: DataTypes.JSON,
      hobbies: DataTypes.JSON,
      socialLinks: DataTypes.JSON
    });
    return Profile;
  };
  