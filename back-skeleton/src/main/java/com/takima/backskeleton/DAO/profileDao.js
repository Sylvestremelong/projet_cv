const { Profile } = require('../models/profile');

class ProfileDao {
  static async getProfile(id) {
    return await Profile.findByPk(id);
  }

  static async createProfile(profileData) {
    return await Profile.create(profileData);
  }

  static async updateProfile(id, profileData) {
    return await Profile.update(profileData, { where: { id } });
  }

  static async deleteProfile(id) {
    return await Profile.destroy({ where: { id } });
  }
}

module.exports = ProfileDao;
