"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const protectedRoutes_1 = __importDefault(require("./routes/protectedRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOptions));
app.use('/auth', authRoutes_1.default);
app.use("/validate-token", protectedRoutes_1.default);
app.listen(port, () => {
    console.log(`server spinning on http://localhost:${port}`);
});
