"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckEMailOrUsernameForADataBreachError = void 0;
class CheckEMailOrUsernameForADataBreachError extends Error {
    isCheckEMailOrUsernameForADataBreachError = true;
    sdk = 'CheckEMailOrUsernameForADataBreach';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CheckEMailOrUsernameForADataBreachError = CheckEMailOrUsernameForADataBreachError;
//# sourceMappingURL=CheckEMailOrUsernameForADataBreachError.js.map