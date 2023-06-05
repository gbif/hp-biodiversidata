---
layout: heroImage # try to remoce this line (add # in the beginning of the line to make it a comment) - then the layout will change, but the content remain the same
title: Código
description: Nuestro respositorio en GitHub reúne todo el código usado para el proyecto. También, el modelo de metadatos que usamos, referencias a términos de DarwinCore y más.
background: /assets/images/banners/60508300.jpeg
height: 50vh
parallax: true
imageLicense: |
  *Sporobolus montevidensis* observed in Uruguay by Florencia Grattarola licensed under [CC BY](http://creativecommons.org/licenses/by/4.0/) via [iNaturalist](https://www.gbif.org/occurrence/2574126620)
composition:
  - type: heroImage
  - type: pageMarkdown
  - type: features
    data: menu.codigo
---

## Código

Nuestro trabajo tiene un fuerte componente de trabajo en R, que hacemos disponible con licencias abiertas a través de GitHub. Encontrá código para limpiar, procesar y controlar la calidad de los datos sobre biodiversidad:

### Vertebrados tetrápodos

- [Check species names](https://github.com/bienflorencia/rBiodiversidata/blob/62b3dbbc9a491b01e3de9837091c774813c36c0e/Data%20Cleaning%20and%20Standardisation%20Scripts/check_species_names.R){:target="_blank"} (DwC term: `scientificName`).  
- [Get taxonomic information for a species](https://github.com/bienflorencia/rBiodiversidata/blob/62b3dbbc9a491b01e3de9837091c774813c36c0e/Data%20Cleaning%20and%20Standardisation%20Scripts/retrieve_taxonomy.R){:target="_blank"} (DwC terms: `kingdom`, `phylum`, `class`, `order`, `familiy`).  
- [Get scientific name authorship for a species](https://github.com/bienflorencia/rBiodiversidata/blob/62b3dbbc9a491b01e3de9837091c774813c36c0e/Data%20Cleaning%20and%20Standardisation%20Scripts/get_scientificNameAuthorship.R){:target="_blank"} (DwC term: `scientificNameAuthorship`).  
- [Get conservation status and population trend](https://github.com/bienflorencia/rBiodiversidata/blob/62b3dbbc9a491b01e3de9837091c774813c36c0e/Data%20Cleaning%20and%20Standardisation%20Scripts/retrieve_IUCN_data.R){:target="_blank"} (IUCN).  

### Plantas vasculares

- [Check species names and get taxonomic information for a species](https://github.com/bienflorencia/rBiodiversidata/blob/62b3dbbc9a491b01e3de9837091c774813c36c0e/Data%20Cleaning%20and%20Standardisation%20Scripts/check_species_names_and_get_taxonomic_info.R){:target="_blank"} (DwC term: `scientificName`, `genus`, `specificEpithet`, `infraspecificEpithet`, `scientificNameAuthorship`, `taxonRank`, `taxonID`).
- [Get higher rank taxonomic information for a species](https://github.com/bienflorencia/rBiodiversidata/blob/62b3dbbc9a491b01e3de9837091c774813c36c0e/Data%20Cleaning%20and%20Standardisation%20Scripts/get_plant_taxonomic_info.R){:target="_blank"} (DwC terms: `kingdom`, `phylum`, `class`, `order`).
- [Get the state or province of the geographic location of a record](https://github.com/bienflorencia/rBiodiversidata/blob/62b3dbbc9a491b01e3de9837091c774813c36c0e/Data%20Cleaning%20and%20Standardisation%20Scripts/get_state_province.R){:target="_blank"} (DwC term: `stateProvince`).
- [Update de event date of a record](https://github.com/bienflorencia/rBiodiversidata/blob/62b3dbbc9a491b01e3de9837091c774813c36c0e/Data%20Cleaning%20and%20Standardisation%20Scripts/get_event_date.R){:target="_blank"} (DwC term: `eventDate`).

## Modelo de metadatos

Para completar los metadatos del conjunto de datos hemos generado el siguiente documento de texto con sugerencias y campos pre-llenados:

- [Modelo de metadatos](https://github.com/bienflorencia/rBiodiversidata/blob/f93a6c97fa56c28d7645ee49ae491ef62fef8754/Useful%20files/Modelo_Metadata.md){:target="_blank"}.

## Referencias a términos del estándar DarwinCore

Recomendaciones para el uso del estándar DarwinCore en nuestro proyecto:

- [Referencia](https://raw.githubusercontent.com/bienflorencia/rBiodiversidata/master/Useful%20files/Referencia_de_terminos_DarwinCore_Biodiversidata_2020.pdf){:target="_blank"}.
