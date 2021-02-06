"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const validateRegister = (options) => {
    if (options.username.length <= 2) {
        return [
            {
                field: "username",
                message: "Length must be greater than 2",
            },
        ];
    }
    if (options.email.length <= 2) {
        return [
            {
                field: "email",
                message: "Must be Valid Email",
            },
        ];
    }
    if (options.password.length <= 3) {
        return [
            {
                field: "password",
                message: "Length must be greater than 3",
            },
        ];
    }
    return null;
};
exports.validateRegister = validateRegister;
//# sourceMappingURL=validateRegister.js.map