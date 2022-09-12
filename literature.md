---
layout: literature
description: Explorá las publicaciones derivadas del trabajo de los y las integrantes del equipo.
permalink: /literature
---
<script>
  var siteConfig = {
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ['UY']
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['UY']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  }
};
</script>
