import { InterestFromServer } from './interest-from-server.interface';

export interface GetInterestsAPI {
    data: {
        getInterests: InterestFromServer[];
    };
}
