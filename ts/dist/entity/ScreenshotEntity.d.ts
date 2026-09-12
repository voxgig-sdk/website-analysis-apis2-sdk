import { WebsiteAnalysisApis2EntityBase } from '../WebsiteAnalysisApis2EntityBase';
import type { WebsiteAnalysisApis2SDK } from '../WebsiteAnalysisApis2SDK';
import type { Control } from '../types';
import type { Screenshot, ScreenshotLoadMatch } from '../WebsiteAnalysisApis2Types';
declare class ScreenshotEntity extends WebsiteAnalysisApis2EntityBase<Screenshot> {
    constructor(client: WebsiteAnalysisApis2SDK, entopts: any);
    make(this: ScreenshotEntity): ScreenshotEntity;
    load(this: any, reqmatch?: ScreenshotLoadMatch, ctrl?: Control): Promise<ScreenshotEntity>;
}
export { ScreenshotEntity };
