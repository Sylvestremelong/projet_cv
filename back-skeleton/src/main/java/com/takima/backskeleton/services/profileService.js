const ProfileDao = require('../dao/profileDao');

class ProfileService {
  static getProfile(id) {
    return ProfileDao.getProfile(id);
  }

  static createProfile(profileData) {
    return ProfileDao.createProfile(profileData);
  }

  static updateProfile(id, profileData) {
    return ProfileDao.updateProfile(id, profileData);
  }

  static deleteProfile(id) {
    return ProfileDao.deleteProfile(id);
  }
}

module.exports = ProfileService;
