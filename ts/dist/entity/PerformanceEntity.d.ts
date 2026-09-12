import { WebsiteAnalysisApis2EntityBase } from '../WebsiteAnalysisApis2EntityBase';
import type { WebsiteAnalysisApis2SDK } from '../WebsiteAnalysisApis2SDK';
import type { Control } from '../types';
import type { Performance, PerformanceLoadMatch } from '../WebsiteAnalysisApis2Types';
declare class PerformanceEntity extends WebsiteAnalysisApis2EntityBase<Performance> {
    constructor(client: WebsiteAnalysisApis2SDK, entopts: any);
    make(this: PerformanceEntity): PerformanceEntity;
    load(this: any, reqmatch?: PerformanceLoadMatch, ctrl?: Control): Promise<PerformanceEntity>;
}
export { PerformanceEntity };
