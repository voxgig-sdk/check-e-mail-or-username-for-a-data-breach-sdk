import { CheckEMailOrUsernameForADataBreachEntityBase } from '../CheckEMailOrUsernameForADataBreachEntityBase';
import type { CheckEMailOrUsernameForADataBreachSDK } from '../CheckEMailOrUsernameForADataBreachSDK';
import type { Control } from '../types';
import type { DataBreachCheck, DataBreachCheckListMatch } from '../CheckEMailOrUsernameForADataBreachTypes';
declare class DataBreachCheckEntity extends CheckEMailOrUsernameForADataBreachEntityBase<DataBreachCheck> {
    constructor(client: CheckEMailOrUsernameForADataBreachSDK, entopts: any);
    make(this: DataBreachCheckEntity): DataBreachCheckEntity;
    list(this: any, reqmatch?: DataBreachCheckListMatch, ctrl?: Control): Promise<DataBreachCheckEntity[]>;
}
export { DataBreachCheckEntity };
