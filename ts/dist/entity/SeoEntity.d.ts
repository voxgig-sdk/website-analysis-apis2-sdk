import { WebsiteAnalysisApis2EntityBase } from '../WebsiteAnalysisApis2EntityBase';
import type { WebsiteAnalysisApis2SDK } from '../WebsiteAnalysisApis2SDK';
import type { Control } from '../types';
import type { Seo, SeoListMatch } from '../WebsiteAnalysisApis2Types';
declare class SeoEntity extends WebsiteAnalysisApis2EntityBase<Seo> {
    constructor(client: WebsiteAnalysisApis2SDK, entopts: any);
    make(this: SeoEntity): SeoEntity;
    list(this: any, reqmatch?: SeoListMatch, ctrl?: Control): Promise<SeoEntity[]>;
}
export { SeoEntity };
