const getApp = require('../server/index.js');

const port = process.env.PORT || 5000;

getApp().listen(port);
