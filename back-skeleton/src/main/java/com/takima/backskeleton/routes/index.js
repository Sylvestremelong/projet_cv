const profileController = require('../controllers/profileController');

module.exports = (app) => {
  app.get('/profile/:id', profileController.getProfile);
  app.post('/profile', profileController.createProfile);
  app.put('/profile/:id', profileController.updateProfile);
  app.delete('/profile/:id', profileController.deleteProfile);
};
