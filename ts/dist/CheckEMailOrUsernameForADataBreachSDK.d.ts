import { DataBreachCheckEntity } from './entity/DataBreachCheckEntity';
export type * from './CheckEMailOrUsernameForADataBreachTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CheckEMailOrUsernameForADataBreachEntityBase } from './CheckEMailOrUsernameForADataBreachEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CheckEMailOrUsernameForADataBreachSDK {
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
    DataBreachCheck(entopts?: Record<string, any>): DataBreachCheckEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CheckEMailOrUsernameForADataBreachSDK;
    tester(testopts?: any, sdkopts?: any): CheckEMailOrUsernameForADataBreachSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CheckEMailOrUsernameForADataBreachSDK;
export { stdutil, config, BaseFeature, CheckEMailOrUsernameForADataBreachEntityBase, CheckEMailOrUsernameForADataBreachSDK, SDK, };
