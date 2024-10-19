const { postPredictHandler, predictHistories } = require('../server/handler');

const routes = [
  {
    path: '/',
    method: 'GET',
    handler: (request, h) => {
      return h.response({
        status: 'success',
        message: 'Welcome to the Cancer Prediction API!'
      }).code(200);
    }
  },
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        maxBytes: 1000 * 1000,  // Limit file size to 1MB
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: predictHistories
  }
];

module.exports = routes;
