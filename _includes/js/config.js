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
    },
    literatureSearch: {
      route: '/literature/buscar'
    }
  },
  maps: {
    locale: 'es',
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      MERCATOR: ['BRIGHT', 'NATURAL', 'DARK'],
    },
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
      predicates: [
        {
          'key': 'publishingOrg',
          'type': 'equals',
          'value': '862f7ec3-3134-4dce-ab5a-03c81f54bd72'
        },
        {
          'type': 'and',
          'predicates': [
            {
              'key': 'publishingOrg',
              'type': 'equals',
              'value': '28eb1a3f-1c15-4a95-931a-4af90ecb574d'
            },
            {
              'key': 'country',
              'type': 'equals',
              'value': 'UY'
            },
          ]
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'stateProvince', 'year', 'basisOfRecord', 'publisherKey'],
    occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'or',
        predicates: [
          {
            'type': 'in',
            'key': 'doi',
            'values': ['10.1038/s41598-020-79074-8']
          },
          {
            'type': 'in',
            'key': 'publishingOrganizationKey',
            'values': ['862f7ec3-3134-4dce-ab5a-03c81f54bd72']
          },
          // {
          //   'type': 'in',
          //   'key': 'countriesOfCoverage',
          //   'values': ['UY']
          // }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  }
};

// example of a language specific route overwrite
if (pageLang === 'en')  {
  siteConfig.routes.occurrenceSearch.route = '/occurrence/search';
  siteConfig.routes.literatureSearch.route = '/literature/search';
}
