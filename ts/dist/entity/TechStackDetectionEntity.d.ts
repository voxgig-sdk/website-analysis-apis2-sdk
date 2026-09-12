import { WebsiteAnalysisApis2EntityBase } from '../WebsiteAnalysisApis2EntityBase';
import type { WebsiteAnalysisApis2SDK } from '../WebsiteAnalysisApis2SDK';
import type { Control } from '../types';
import type { TechStackDetection, TechStackDetectionListMatch } from '../WebsiteAnalysisApis2Types';
declare class TechStackDetectionEntity extends WebsiteAnalysisApis2EntityBase<TechStackDetection> {
    constructor(client: WebsiteAnalysisApis2SDK, entopts: any);
    make(this: TechStackDetectionEntity): TechStackDetectionEntity;
    list(this: any, reqmatch?: TechStackDetectionListMatch, ctrl?: Control): Promise<TechStackDetectionEntity[]>;
}
export { TechStackDetectionEntity };
