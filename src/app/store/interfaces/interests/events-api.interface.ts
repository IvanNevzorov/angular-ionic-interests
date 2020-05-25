export interface EventsAPI {
    _embedded: {
        events: [{
            name: string;
            classifications: [{
                segment: {
                    name: string;
                };
            }];
            images: [{
                url: string;
            }];
        }];

    };
}
