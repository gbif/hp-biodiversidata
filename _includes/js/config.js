var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/datos/buscar'
    }
  },
  occurrence: {
    mapSettings: {
      lat: -32.96,
      lng: -56.19,
      zoom: 6.58
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API.
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for 'Occurrence Download Predicates')
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE.
    rootPredicate: {
      type: 'or',
      'predicates': [
        {
          key: 'publishingOrg',
          type: 'equals',
          value: '862f7ec3-3134-4dce-ab5a-03c81f54bd72'
        },
        {
          type: 'and',
          'predicates': [
            {
              key: 'country',
              type: 'equals',
              value: 'UY'
            },
            {
              key: 'publishingOrg',
              type: 'equals',
              value: '50c9509d-22c7-4a22-a47d-8c48425ef4a7'
            }
          ]
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'stateProvince', 'year', 'basisOfRecord', 'publishingOrg','occurrenceIssue'],  
    occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  }
};

// example of a language specific route overwrite
if (pageLang === 'en')  {
  siteConfig.routes.occurrenceSearch.route = '/occurrence/search';
}
