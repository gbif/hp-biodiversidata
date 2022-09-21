---
title:  "NaturalistaUY: ¿dónde hay más oportunidades de llenar vacíos de información?"
date: 2021-12-01
categories: ["uso de datos / data use"]
lang-ref: nota en la diaria
background: https://biodiversidata.org/es/post/latinr-2021/featured.png
imageLicense: |
  Imagen por [**Florencia Grattarola**](https://flograttarola.com)
---

## Presentación en la Conferencia LatinR

**Este trabajo fue presentado en la Conferencia LatinR 2021**. Usando como base los datos ingresados en la plataforma iNaturalist para Uruguay (descargados el 21 de octubre de 2021), nos propusimos generar un mapa interactivo que ordene las áreas con déficit de datos de biodiversidad y nos permita resaltar aquellas en las que registros adicionales de biodiversidad podrían ser particularmente valiosos para llenar los vacíos de conocimiento. Las grillas se clasificaron como "Sin registros", "Muy alta", "Alta", "Media", "Baja" y "Muy baja" prioridad, basándose en cada grupo taxonómico. A continuación, los datos se utilizaron como base para crear una aplicación en Shiny. La app permite visualizar el mapa de Uruguay con las grillas hexagonales coloreadas según el orden de prioridad generado. Además, quienes consulten el mapa podrán seleccionar el grupo taxonómico de interés y elegir una grilla, para la cual se desplegará información sobre: el área de la grilla, los valores de intensidad espacial y temporal, la cantidad de especies registradas para esa grilla, el número de especies nuevas registradas en el último año y la proporción de éstas sobre el total registrado para esa grilla.


<iframe height="600px" width="100%" frameborder="no" src="https://bienflorencia.shinyapps.io/iNatUy_priority_map/"> </iframe>

**Grattarola, F., & Barreneche, J. M.** (2021). *Soy naturalista y quiero pasear en mi país, dónde hay más oportunidades de llenar vacíos de información?* Conferencia Latinoamericana sobre Uso de R en Investigación+ Desarrollo (LatinR 2021), Virtual.

***

[app de Shiny](https://github.com/bienflorencia/LatinR2021/tree/main/iNatUy_priority_map){: .button .is-primary} [Presentación](https://github.com/bienflorencia/LatinR2021/blob/5081c1cac28a4207a653771da89870146ab7bca3/docs/xaringan_latinR/Presentacion_NaturalistaUY.pdf){: .button}
