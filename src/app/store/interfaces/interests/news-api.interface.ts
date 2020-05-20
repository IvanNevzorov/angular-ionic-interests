export interface NewsAPI {
    news: [{
        title: string;
        description: string;
        category: string[];
    }];
}
