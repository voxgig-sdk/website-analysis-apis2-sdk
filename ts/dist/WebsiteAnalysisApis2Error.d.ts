import { Context } from './Context';
declare class WebsiteAnalysisApis2Error extends Error {
    isWebsiteAnalysisApis2Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { WebsiteAnalysisApis2Error };
