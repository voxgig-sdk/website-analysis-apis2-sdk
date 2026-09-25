"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteAnalysisApis2Error = void 0;
class WebsiteAnalysisApis2Error extends Error {
    isWebsiteAnalysisApis2Error = true;
    sdk = 'WebsiteAnalysisApis2';
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
exports.WebsiteAnalysisApis2Error = WebsiteAnalysisApis2Error;
//# sourceMappingURL=WebsiteAnalysisApis2Error.js.map