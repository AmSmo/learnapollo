"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const isAuthenticated = ({ context }, next) => {
    if (!context.req.session.userId) {
        throw new Error("Not Authenticated");
    }
    return next();
};
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=isAuth.js.map