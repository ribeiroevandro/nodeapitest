'use strict';

require('dotenv/config');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_routes2.default);

app.disable('x-powered-by');

app.listen(process.env.PORT || 4000, function () {
  console.log('Listening on port: ' + process.env.PORT);
});