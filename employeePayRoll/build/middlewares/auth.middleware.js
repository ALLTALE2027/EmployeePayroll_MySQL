"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuth = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
var userAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerToken, _yield$jwt$verify, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log('Inside auth middleware');
            bearerToken = req.header('Authorization');
            if (bearerToken) {
              _context.next = 5;
              break;
            }
            throw {
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: 'Authorization token is required'
            };
          case 5:
            bearerToken = bearerToken.split(' ')[1];
            _context.next = 8;
            return _jsonwebtoken["default"].verify(bearerToken, process.env.SECRET_KEY);
          case 8:
            _yield$jwt$verify = _context.sent;
            user = _yield$jwt$verify.user;
            res.locals.user = user;
            res.locals.token = bearerToken;
            req.body.userEmail = user.email;
            console.log('user email ', user.email);
            next();
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            res.status(_httpStatusCodes["default"].UNAUTHORIZED).json({
              code: _httpStatusCodes["default"].UNAUTHORIZED,
              message: "".concat(_context.t0)
            });
          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));
  return function userAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.userAuth = userAuth;