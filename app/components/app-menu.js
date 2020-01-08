"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppMenu;

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Menu2 = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _welcome = _interopRequireDefault(require("./welcome"));

var _basicForm = _interopRequireDefault(require("./basic-form"));

var _command = _interopRequireDefault(require("./command"));

var _appAbout = _interopRequireDefault(require("./app-about"));

var _rest = _interopRequireDefault(require("./rest"));

var _fs_inifile = _interopRequireDefault(require("./fs_inifile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AppMenu(props) {
  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickOpt(page) {
    props.mainApp.routePage(page);
    handleClose();
  }

  var appButton = {
    WebkitAppRegion: "no-drag"
  };
  return _react["default"].createElement("div", null, _react["default"].createElement(_Tooltip["default"], {
    title: "Menu principal"
  }, _react["default"].createElement(_IconButton["default"], {
    color: "inherit",
    size: "small",
    style: appButton,
    onClick: handleClick
  }, _react["default"].createElement(_Menu2["default"], {
    width: "28"
  }))), _react["default"].createElement(_Menu["default"], {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, _react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_welcome["default"]);
    }
  }, "Bem-vindo"), _react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_basicForm["default"]);
    }
  }, "Formulario"), _react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_command["default"]);
    }
  }, "Executa Comando"), _react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_rest["default"]);
    }
  }, "Consome Rest"), _react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_fs_inifile["default"]);
    }
  }, "Sistema de Arquivos / Ini File"), _react["default"].createElement(_Divider["default"], null), _react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_appAbout["default"]);
    }
  }, "Sobre...")));
}