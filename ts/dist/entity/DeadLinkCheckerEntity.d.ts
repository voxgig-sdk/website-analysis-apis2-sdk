import { WebsiteAnalysisApis2EntityBase } from '../WebsiteAnalysisApis2EntityBase';
import type { WebsiteAnalysisApis2SDK } from '../WebsiteAnalysisApis2SDK';
import type { Control } from '../types';
import type { DeadLinkChecker, DeadLinkCheckerListMatch } from '../WebsiteAnalysisApis2Types';
declare class DeadLinkCheckerEntity extends WebsiteAnalysisApis2EntityBase<DeadLinkChecker> {
    constructor(client: WebsiteAnalysisApis2SDK, entopts: any);
    make(this: DeadLinkCheckerEntity): DeadLinkCheckerEntity;
    list(this: any, reqmatch?: DeadLinkCheckerListMatch, ctrl?: Control): Promise<DeadLinkCheckerEntity[]>;
}
export { DeadLinkCheckerEntity };
