"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  bind: function bind(fpm) {
    fpm.registerAction('BEFORE_MODULES_ADDED', function (args) {
      var biz = args[0];
      biz.m = _lodash2.default.assign(biz.m, {
        proxy: {
          forward: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(arg) {
              var url, params, resultType, data;
              return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      url = arg.url;
                      params = arg.params;
                      resultType = arg.resultType || 'json';
                      _context.next = 5;
                      return (0, _nodeFetch2.default)(url, params).then(function (rsp) {
                        if ('json' === resultType) {
                          return rsp.json();
                        }
                        return rsp.json();
                      });

                    case 5:
                      data = _context.sent;
                      return _context.abrupt('return', { data: data });

                    case 7:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, undefined);
            }));

            return function forward(_x) {
              return _ref.apply(this, arguments);
            };
          }()
        }
      });
    });
  }
};