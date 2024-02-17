"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authControllers = require("../controllers/auth-controllers.js");

var router = (0, _express.Router)();
router.post("/login", _authControllers.login);
router.post("/signup", _authControllers.signup);
router.post("/logout", _authControllers.logout);
var _default = router;
exports["default"] = _default;