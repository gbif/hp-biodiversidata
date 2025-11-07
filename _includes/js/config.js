var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch",
      "path": "datos/buscar"
    },
    {
      "id": "literatureSearch",
      "path": "literature/buscar"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "locale": "es",
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL",
          "DARK"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "es",
      "localeCode": "es",
      "label": "Español",
      "default": true,
      "textDirection": "ltr",
      "cmsLocale": "es",
      "vocabularyLocale": "es-ES",
      "iso3LetterCode": "spa",
      "gbifOrgLocalePrefix": "/es",
      "grSciCollLocalePrefix": "/es",
      "mapTileLocale": "es"
    },
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "key": "publishingOrg",
          "type": "equals",
          "value": "862f7ec3-3134-4dce-ab5a-03c81f54bd72"
        },
        {
          "type": "and",
          "predicates": [
            {
              "key": "publishingOrg",
              "type": "equals",
              "value": "28eb1a3f-1c15-4a95-931a-4af90ecb574d"
            },
            {
              "key": "country",
              "type": "equals",
              "value": "UY"
            }
          ]
        }
      ]
    },
    "highlightedFilters": [
      "taxonKey",
      "stateProvince",
      "year",
      "basisOfRecord",
      "publishingOrg"
    ],
    "tabs": [
      "map",
      "table",
      "gallery",
      "datasets",
      "download"
    ],
    "mapSettings": {
      "lat": -32.96,
      "lng": -56.19,
      "zoom": 6.58
    }
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "publishingOrganizationKey",
          "values": [
            "862f7ec3-3134-4dce-ab5a-03c81f54bd72"
          ]
        }
      ]
    },
    "highlightedFilters": [
      "q",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year"
    ]
  }
};

// example of a language specific route overwrite
if (pageLang === 'en') {
  siteConfig.pages = [
    {
      "id": "occurrenceSearch",
      "path": "occurrence/search"
    },
    {
      "id": "literatureSearch",
      "path": "literature/search"
    }
  ];
}
