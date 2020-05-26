export interface EventsAPI {
    _embedded: {
        events: [{
            id: string;
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
