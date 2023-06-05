---
layout: heroImage
title: Qué datos reunimos
description: Datos primarios de biodiversidad de acceso abierto para todas y todos
background: /assets/images/banners/180266868.jpg
imageLicense: |
  *Lupinus multiflorus* observed in Uruguay by Andrés Acosta licensed under [CC-BY-NC](http://creativecommons.org/licenses/by-nc/4.0/) via [iNaturalist](https://www.gbif.org/occurrence/3698255731)
height: 50vh
parallax: true
composition:
  - type: heroImage
  - type: pageMarkdown
  - type: features
    data: contribute.gbif
---

## Los datos de Biodiversidata

Biodiversidata busca disponibilizar conjuntos de datos que documentan la presencia de organismos de diferentes especies en el territorio uruguayo.

En una primera etapa reunimos registros de presencia ([*occurrence records*](https://www.gbif.org/es/data-quality-requirements-occurrences){:target="_blank"}) de **tetrápodos** y **plantas vasculares** compartidos por integrantes de nuestra iniciativa, además de registros provenientes de referencias bibliográficas y de bases de datos online.  

Estos datos fueron alojados en el repositorio **Zenodo** y pueden encontrarse en nuestro menú de [**Recursos**](/recursos/bases-de-datos/){:target="_blank"}. A su vez, una parte de ellos (los compartidos por nuestros integrantes y los obtenidos de la literatura) fue también publicada en **GBIF**. Estos datos pueden explorarse en el menú de [**Datos**](http://127.0.0.1:4000/datos/buscar/?publishingOrg=862f7ec3-3134-4dce-ab5a-03c81f54bd72&view=MAP){:target="_blank"}. Biodiversidata también promueve el uso de la plataforma de ciencia comunitaria **NaturalistaUY** (iNaturalist en Uruguay). Los datos cargados a través de esta iniciativa que hayan alcanzado [Grado de Investigación](https://www.naturalista.uy/pages/ayuda+uy#observations-quality){:target="_blank"} y tengan licencias CC0, CC BY, o CC-BY NC, son exportados a GBIF con una frecuencia semanal. Estos datos también pueden explorarse en el menú de [**Datos**](http://127.0.0.1:4000/datos/buscar/?publishingOrg=28eb1a3f-1c15-4a95-931a-4af90ecb574d&view=MAP){:target="_blank"}.

## Datos primarios de biodiversidad

Los datos primarios son aquellos que cuentan con información sobre:

  - El **taxón** registrado
  - La **localización geográfica**
  - La **fecha** de colecta u observación

Para sumar conjuntos de datos a Biodiversidata precisamos de los datos pero también de los metadatos (que describen a los datos).

### Datos

+ Nuestros conjuntos de datos son registros (*occurrence records*) que reúnen evidencia de la presencia de una especie (u otro taxón) en un lugar particular en una fecha específica. Para documentar cada registro, usamos cerca de 50 campos de datos que siguen el [Estándar Darwin Core](https://dwc.tdwg.org/){:target="_blank"}.

[Campos de datos](https://github.com/biodiversidata/rBiodiversidata/blob/df1a6483c38d2a9a2f00c1d4b6a3aa4e5347f66c/Useful%20files/biodiversidata_terms_DwC.csv){: .button .is-primary}{:target="_blank"}


### Metadatos (los datos de los datos)

+ Los archivos con metadatos proporcionan una descripción de todos los detalles relevantes de nuestros conjuntos de datos y permiten comprenderlos. Generalmente incluyen información respecto al contexto científico subyacente a los datos, así como quién los recolectó, por qué se recopilaron, dónde, cuándo y cómo. Nuestros datos (así como los de GBIF) siguen el [Estándar EML](https://eml.ecoinformatics.org/){:target="_blank"} (Ecological Metadata Language). Para llenar  los metadatos a publicar en GBIF hemos generado un modelo para facilitar el proceso.

[Modelo de metadatos](https://github.com/bienflorencia/rBiodiversidata/blob/f93a6c97fa56c28d7645ee49ae491ef62fef8754/Useful%20files/Modelo_Metadata.md){: .button .is-primary}{:target="_blank"} [Descargá el arhcivo .docx](https://github.com/bienflorencia/rBiodiversidata/raw/f93a6c97fa56c28d7645ee49ae491ef62fef8754/Useful%20files/Modelo_Metadata.docx){: .button }{:target="_blank"}
