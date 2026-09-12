import { DeadLinkCheckerEntity } from './entity/DeadLinkCheckerEntity';
import { PerformanceEntity } from './entity/PerformanceEntity';
import { ScreenshotEntity } from './entity/ScreenshotEntity';
import { SeoEntity } from './entity/SeoEntity';
import { SslEntity } from './entity/SslEntity';
import { TechStackDetectionEntity } from './entity/TechStackDetectionEntity';
export type * from './WebsiteAnalysisApis2Types';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WebsiteAnalysisApis2EntityBase } from './WebsiteAnalysisApis2EntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class WebsiteAnalysisApis2SDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    DeadLinkChecker(entopts?: Record<string, any>): DeadLinkCheckerEntity;
    Performance(entopts?: Record<string, any>): PerformanceEntity;
    Screenshot(entopts?: Record<string, any>): ScreenshotEntity;
    Seo(entopts?: Record<string, any>): SeoEntity;
    Ssl(entopts?: Record<string, any>): SslEntity;
    TechStackDetection(entopts?: Record<string, any>): TechStackDetectionEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WebsiteAnalysisApis2SDK;
    tester(testopts?: any, sdkopts?: any): WebsiteAnalysisApis2SDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WebsiteAnalysisApis2SDK;
export { stdutil, config, BaseFeature, WebsiteAnalysisApis2EntityBase, WebsiteAnalysisApis2SDK, SDK, };
