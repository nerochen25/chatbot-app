"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidPassword = exports.isValidBirthDate = exports.isValidEmail = void 0;

var isValidEmail = function isValidEmail(email, validation) {
  var result = new RegExp(validation).test(email);
  return result;
};

exports.isValidEmail = isValidEmail;

var isValidBirthDate = function isValidBirthDate(birthdate, validation) {
  var result = new RegExp(validation).test(birthdate);
  return result;
};

exports.isValidBirthDate = isValidBirthDate;

var isValidPassword = function isValidPassword(password, validation) {
  var result = new RegExp(validation).test(password);
  return result;
};

exports.isValidPassword = isValidPassword;