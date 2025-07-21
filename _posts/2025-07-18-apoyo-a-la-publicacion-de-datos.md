---
title:  "Apoyo a la publicación de datos de Bol-UY en GBIF"
preTitle: "18 de julio, 2025"
date: 2025-07-18
categories: ["Datos abiertos", "R", "Wikimedia Commons"]
#lang-ref: dataset plantas gbif
background: https://inaturalist-open-data.s3.amazonaws.com/photos/60042984/original.jpeg
imageLicense: |
  *Apis mellifera* in *Blepharocalyx salicifolius* observed in Uruguay by Florencia Grattarola licensed under [CC BY](http://creativecommons.org/licenses/by/4.0/) via [iNaturalist](https://www.gbif.org/occurrence/2563549041)
---

## Plantas melíferas de los ecosistemas bosque y pradera nativa del departamento de Rivera, Uruguay

Florencia Grattarola, integrante de Biodiversidata, colaboró en la publicación del primer conjunto de datos de [Bol-UY](https://www.gub.uy/ministerio-educacion-cultura/politicas-y-gestion/usina-codigos-barra-vida-uruguay), la **Iniciativa Uruguaya de Código de Barras de la Vida**. Este trabajo se enmarca en el proyecto "Usina de Códigos de Barra de la Vida - Uruguay" (FMV_1_2021_1_166380), liderado por Mariana Cosse del Instituto Clemente Estable (IIBCE).

El conjunto de datos reúne registros de presencia de plantas melíferas en ecosistemas de bosque y pradera nativa del departamento de Rivera. Su objetivo es contribuir a una base de datos de referencia para la identificación de polen en mieles recolectadas en la región.

## Secuencias de ADN e imágenes de especímenes

La digitalización de este conjunto de datos presentó dos desafíos inéditos para Biodiversidata. Por un lado, incluía secuencias de ADN obtenidas a partir de los ejemplares recolectados. Por otro, contaba con imágenes de esos mismos especímenes, depositados en el Herbario Bernardo Rosengurtt de la Facultad de Agronomía de la Universidad de la República.

Para integrar esta información y enriquecer el conjunto de datos, se incorporaron enlaces directos a las secuencias en *Genbank* mediante el campo `associatedSequences`, apuntando a la URL correspondiente en esa base de datos.

Las imágenes, en tanto, fueron primero cargadas en Wikimedia Commons utilizando *OpenRefine*, bajo la categoría [*Files_provided_by_Uruguayan_Barcode_of_Life_Initiative_BoL-UY*](https://commons.wikimedia.org/wiki/Category:Files_provided_by_Uruguayan_Barcode_of_Life_Initiative_BoL-UY). Posteriormente, se vincularon a los registros usando el campo `associatedMedia`. Este trabajo fue posible gracias al generoso apoyo de Nat Hernández Clavijo, de [Wikimedistas de Uruguay](https://wikimedistas.uy), y [Tiago Lubliana](https://tiago.bio.br), wikimedista brasileño.

***

[Conjunto de datos](https://doi.org/10.15468/n8fp9q){: .button .is-primary}{:target="_blank"} [Imágenes en Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Files_provided_by_Uruguayan_Barcode_of_Life_Initiative_BoL-UY){: .button}{:target="_blank"}
