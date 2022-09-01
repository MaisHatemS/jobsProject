var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    
    "id":"1",
    "title":"Software Engineering",
    "city":"Ramallah",
    "country":"Palestine",
    "sector":"Development",
    "description":"You have to be the best one",
    "jobImg":"https://www.facebook.com/SmallSizenet/photos/a.213048988901374/213050845567855/"

  });
});

module.exports = router;
