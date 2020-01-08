"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var http = require('http');

var Rest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rest, _React$Component);

  function Rest(props) {
    var _this;

    _classCallCheck(this, Rest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rest).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "callRest", function () {
      var options = {
        host: 'localhost',
        port: 3333,
        path: '/url?name=MANSANO%20S/A&year=2019',
        methos: 'GET'
      };
      var req = http.request(options, function (res) {
        _this.setState({
          status: res.statusCode
        });

        _this.setState({
          headers: JSON.stringify(res.headers)
        });

        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          _this.setState({
            return_rest: chunk
          });
        });
      }).end();
      req.on('error', function (e) {
        _this.setState({
          return_rest: e.message
        });
      });
    });

    _this.state = {
      return_rest: "",
      status: "",
      headers: ""
    };

    _this.callRest();

    return _this;
  }

  _createClass(Rest, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement("p", {
        align: "right"
      }, _react["default"].createElement("b", null, "source:"), " rest.js "), _react["default"].createElement("h2", null, "Consumindo Rest"), _react["default"].createElement("p", null, "Na pasta sample_rest tem um programa simples de Rest server"), _react["default"].createElement("p", null, "Inicie com o comando: ", _react["default"].createElement("b", null, "node index.js")), _react["default"].createElement("p", null, _react["default"].createElement("b", null, "Retorno do REST ser\xE3o os par\xE2metros de envio:")), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement("b", null, "Retorno"), ": ", this.state.return_rest), _react["default"].createElement("li", null, _react["default"].createElement("b", null, "Status"), ": ", this.state.status), _react["default"].createElement("li", null, _react["default"].createElement("b", null, "Headers"), ": ", this.state.headers)));
    }
  }]);

  return Rest;
}(_react["default"].Component);

exports["default"] = Rest;