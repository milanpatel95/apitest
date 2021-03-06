'use strict'

module.exports = function(app){
  var controller = require('../controller/controller.js');

  app.route('/api/v1/store')
    .post(controller.savedata)
    .put(controller.updatedata);

  app.route('/api/v1/data')
    .get(controller.getdata);

  app.route('/api/v1/all')
    .get(controller.getalldata);

  app.route('/api/v1/delete')
    .delete(controller.deletedata);
};
