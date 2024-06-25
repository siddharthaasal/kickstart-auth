"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.getProtectedData = getProtectedData;
const authService_1 = require("../services/authService");
// interaction between frontend and backend
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield (0, authService_1.registerService)(email, password);
            res.json({ user });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const token = yield (0, authService_1.loginService)(email, password);
            // res.json({token});
            res.cookie("token", token, {
                httpOnly: true,
                secure: false, // Set to true in production for HTTPS
                sameSite: "strict",
            });
            res.json({ message: "login successful" });
        }
        catch (error) {
            res.status(401).json({ error: error.message });
        }
    });
}
function getProtectedData(req, res) {
    // assuming req is already populated by the midlleware
    console.log("inside gtProtectedData fn");
    res.json({ data: "this is protected data", user: req.user });
}
