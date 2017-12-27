var mongoose = require('mongoose');
var UserData = mongoose.Schema;

var UserDataSchema = new UserData({
  uid:{
    type:String,
    required:'UID neccessary',
    unique:true,
    index:true
  },
  token:{
    type:String,
    required:'Token necessary'
  },
  deviceid:{
    type:String,
    required:'DeviceId necessary'
  }
});

module.exports = mongoose.model('Users',UserDataSchema);
