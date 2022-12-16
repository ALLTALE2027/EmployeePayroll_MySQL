"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUserValidator = exports.loginValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newUserValidator = function newUserValidator(req, res, next) {
  var schema = _joi["default"].object({
    firstName: _joi["default"].string().min(3).required(),
    lastName: _joi["default"].string().min(3).required(),
    email: _joi["default"].string().min(3).required(),
    password: _joi["default"].string().min(8).required()
  });
  var _schema$validate = schema.validate(req.body),
    error = _schema$validate.error,
    value = _schema$validate.value;
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
exports.newUserValidator = newUserValidator;
var loginValidator = function loginValidator(req, res, next) {
  var schema = _joi["default"].object({
    password: _joi["default"].string().min(8).required(),
    email: _joi["default"].string().email().lowercase().required()
  });
  var _schema$validate2 = schema.validate(req.body),
    error = _schema$validate2.error,
    value = _schema$validate2.value;
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: "".concat(error)
    });
  } else {
    next();
  }
};
exports.loginValidator = loginValidator;