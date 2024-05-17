const ProfileService = require('../services/profileService');

const getProfile = async (req, res) => {
  const id = req.params.id;
  try {
    const profile = await ProfileService.getProfile(id);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProfile = async (req, res) => {
  try {
    const newProfile = await ProfileService.createProfile(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProfile = async (req, res) => {
  const id = req.params.id;
  try {
    await ProfileService.updateProfile(id, req.body);
    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProfile = async (req, res) => {
  const id = req.params.id;
  try {
    await ProfileService.deleteProfile(id);
    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile
};
