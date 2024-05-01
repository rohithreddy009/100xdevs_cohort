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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const SECRET_KEY = "0x4AAAAAAAY5erH27SIHtuDWhliHxwjgbGk";
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Store OTPs in a simple in-memory object
const otpStore = {};
// Endpoint to generate and log OTP
app.post('/generate-otp', (req, res) => {
    //   console.log(req.body)
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // generates a 6-digit OTP
    otpStore[email] = otp;
    console.log(`OTP for ${email}: ${otp}`); // Log the OTP to the console
    res.status(200).json({ message: "OTP generated and logged" });
});
// Endpoint to reset password
app.post('/reset-password', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp, newPassword, token } = req.body;
    //   console.log(token);
    let formData = new FormData();
    formData.append('secret', SECRET_KEY);
    formData.append('response', token);
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = yield fetch(url, {
        body: formData,
        method: 'POST',
    });
    const challengeSucceeded = (yield result.json()).success;
    if (!challengeSucceeded) {
        return res.status(403).json({ message: "Invalid reCAPTCHA token" });
    }
    if (!email || !otp || !newPassword) {
        return res.status(400).json({ message: "Email, OTP, and new password are required" });
    }
    if (Number(otpStore[email]) === Number(otp)) {
        console.log(`Password for ${email} has been reset to: ${newPassword}`);
        delete otpStore[email]; // Clear the OTP after use
        res.status(200).json({ message: "Password has been reset successfully" });
    }
    else {
        res.status(401).json({ message: "Invalid OTP" });
    }
}));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
