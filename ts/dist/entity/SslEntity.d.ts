import { WebsiteAnalysisApis2EntityBase } from '../WebsiteAnalysisApis2EntityBase';
import type { WebsiteAnalysisApis2SDK } from '../WebsiteAnalysisApis2SDK';
import type { Control } from '../types';
import type { Ssl, SslLoadMatch } from '../WebsiteAnalysisApis2Types';
declare class SslEntity extends WebsiteAnalysisApis2EntityBase<Ssl> {
    constructor(client: WebsiteAnalysisApis2SDK, entopts: any);
    make(this: SslEntity): SslEntity;
    load(this: any, reqmatch?: SslLoadMatch, ctrl?: Control): Promise<SslEntity>;
}
export { SslEntity };
