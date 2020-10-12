"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var isBrowser = typeof window !== 'undefined';
var ace;

if (isBrowser) {
  ace = require('ace-builds');
  ace.config.set('basePath', 'ace-builds/src-noconflict');

  require("ace-builds/src-noconflict/ext-searchbox.js");
}

var CodeEditor = /*#__PURE__*/function (_Component) {
  _inherits(CodeEditor, _Component);

  var _super = _createSuper(CodeEditor);

  function CodeEditor() {
    _classCallCheck(this, CodeEditor);

    return _super.apply(this, arguments);
  }

  _createClass(CodeEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!isBrowser) return;
      var _this$props = this.props,
          autoSelect = _this$props.autoSelect,
          editorProps = _this$props.editorProps,
          onChange = _this$props.onChange,
          setReadOnly = _this$props.setReadOnly,
          readOnly = _this$props.readOnly,
          setValue = _this$props.setValue,
          value = _this$props.value,
          theme = _this$props.theme,
          mode = _this$props.mode,
          textWrap = _this$props.textWrap;

      require("ace-builds/src-noconflict/mode-".concat(mode));

      require("ace-builds/src-noconflict/theme-".concat(theme));

      var editor = ace.edit('ace-editor', editorProps);
      editor.$blockScrolling = Infinity;
      editor.getSession().setUseWorker(false);
      editor.getSession().setMode("ace/mode/".concat(mode));
      editor.setTheme("ace/theme/".concat(theme));
      this.editor = editor;
      editor.on('change', function (e) {
        return onChange(editor.getValue(), e);
      });
      editor.setReadOnly(readOnly || setReadOnly);
      editor.setValue(value || setValue);
      editor.session.setUseWrapMode(textWrap);
      !autoSelect && editor.setValue(editor.getValue(), -1);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          editorId = _this$props2.editorId;
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: editorId,
        style: style
      });
    }
  }]);

  return CodeEditor;
}(_react.Component);

CodeEditor.propTypes = {
  editorProps: _propTypes["default"].object,
  editorId: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  setReadOnly: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  setValue: _propTypes["default"].string,
  value: _propTypes["default"].string,
  theme: _propTypes["default"].string,
  mode: _propTypes["default"].string,
  style: _propTypes["default"].object
};
CodeEditor.defaultProps = {
  autoSelect: false,
  editorId: 'ace-editor',
  onChange: function onChange() {},
  setValue: '',
  value: '',
  setReadOnly: false,
  readOnly: false,
  theme: 'eclipse',
  mode: 'javascript',
  style: {
    height: '300px',
    width: '400px'
  },
  editorProps: {},
  textWrap: true
};
module.exports = CodeEditor;