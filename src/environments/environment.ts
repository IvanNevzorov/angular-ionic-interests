// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  graphql: 'http://localhost:5000/graphql',

  eventsUrl: 'http://app.ticketmaster.com/discovery/v2/events.json',
  eventsKey: '0qPTAu6ZOV8ZMnyWLFqROp7WdgGmuQgH',

  newsUrl: 'https://api.currentsapi.services/v1/latest-news',
  newsKey: 'sowcEeuz3VqwozgUnU9IRn1eSO9tRBlTnHNJfCoBzshx7DFW',

  mealRandomUrl: 'https://www.themealdb.com/api/json/v1/1/random.php'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
