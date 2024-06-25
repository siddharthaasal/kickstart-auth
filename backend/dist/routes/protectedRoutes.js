"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticateToken_1 = __importDefault(require("../middleware/authenticateToken"));
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.get('/', authenticateToken_1.default, authController_1.getProtectedData);
exports.default = router;
