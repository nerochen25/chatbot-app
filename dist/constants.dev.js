"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INVALID_PASSWORD = exports.INVALID_EMAIL = exports.INVALID_BIRTH_DATE = exports.DEFAULT_ERROR = exports.HOST = exports.CUSTOMER = exports.HOST_NAME = exports.apiURL = void 0;
// api data
var apiURL = 'https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json'; // host data

exports.apiURL = apiURL;
var HOST_NAME = {
  firstName: 'Marianne',
  lastName: 'Singer'
}; // message properties

exports.HOST_NAME = HOST_NAME;
var CUSTOMER = 'customer';
exports.CUSTOMER = CUSTOMER;
var HOST = 'host'; // validation error messages

exports.HOST = HOST;
var DEFAULT_ERROR = 'I am not sure what you mean.';
exports.DEFAULT_ERROR = DEFAULT_ERROR;
var INVALID_BIRTH_DATE = 'Please make sure your birth date follows the MM/DD/YYYY format.';
exports.INVALID_BIRTH_DATE = INVALID_BIRTH_DATE;
var INVALID_EMAIL = 'Please make sure that your email is using the following format: abc@domain.com.';
exports.INVALID_EMAIL = INVALID_EMAIL;
var INVALID_PASSWORD = 'Please make sure that your password is at least 6 characters.';
exports.INVALID_PASSWORD = INVALID_PASSWORD;