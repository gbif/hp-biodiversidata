---
layout: heroImage
lang-ref: acercade
title: Nuestra historia
description: Consorcio de Datos de Biodiversidad del Uruguay
background: https://static.inaturalist.org/photos/173516962/original.jpg
imageLicense: |
  Oreopholus ruficollis observed in Uruguay by Mauricio Silvera licensed under [CC-BY-NC](http://creativecommons.org/licenses/by-nc/4.0/) via [iNaturalist](https://www.gbif.org/occurrence/3759147791)
height: 50vh
permalink: /historia
---

El Consorcio de Datos de Biodiversidad del Uruguay fue creado en 2018 por Florencia Grattarola en el marco de su proyecto de doctorado en la University of Lincoln (Reino Unido), financiado por la Agencia Nacional de Investigación e Innovación de Uruguay a través de su programa de Posgrado en el Exterior (POS_EXT_2016_1\_).

## Primera etapa

Durante la primera etapa (2018 a 2020), Biodiversidata se enfocó en consolidar un grupo de personas, colectar y rescatar datos primarios de biodiversidad, limpiarlos y estandarizarlos, hacer los datos disponibles, y hacer uso de esos datos respondiendo preguntas de investigación.

#### 1. Convocar a las partes interesadas en el país (comunidad científica, instituciones de investigación y organismos públicos) para que compartan sus datos de biodiversidad derivados de sus muestreos y/o investigaciones.

Se tuvieron reuniones con integrantes de las colecciones de Facultad de Ciencias, Museo Nacional de Historia Natural del Uruguay y el Ministerio de Ambiente a través del nodo GBIF Uruguay. Tras evaluar que la discusión sobre ciencia abierta y apertura de datos derivados de la ciencia en estas instituciones era aún muy incipiente y teniendo en cuenta los plazos del proyecto, se decidió poner foco en la comunidad de investigadores que estuvieran dispuestos a compartir sus datos.

Para planificar estratégicamente la creación de Biodiversidata, se realizó un estudio que permitió conocer la percepción de quienes colectan y usan datos en Uruguay ([Grattarola & Pincheira-Donoso 2019](https://doi.org/10.26462/28.1.1)). A través de este estudio percibimos que en Uruguay no existe una cultura de compartir datos en forma abierta, que hay una preponderante falta de planificación en el manejo de datos y que esto representa una gran barrera para compartirlos, y que existe una cultura arraigada sobre el uso asimétrico de los datos generados sin una visión de reutilización.


Imagen del afiche de la convocatoria


Desde Biodiversidata entendimos que para comenzar a cambiar el escenario de escasez de datos abiertos es necesario empezar por crear una red de personas dispuestas a compartir sus datos y conocimientos, simplificarles el procesamiento de los datos (limpieza y estandarización) y dar crédito en forma de autoría a los investigadores por su colaboración en datos e investigaciones.

La apertura a la recepción de datos se hizo a través de convocatorias masivas y correos individuales a expertos y expertas identificadas de antemano. En total se contactaron unas 65 personas, de las cuales 53 respondieron positivamente y 14 finalmente compartieron datos (21.5% de las contactadas en primera instancia). Biodiversidata, sus objetivos y el plan a corto y largo plazo fueron finalmente presentados en la Facultad de Ciencias de la Universidad de la República en diciembre de 2018 en el marco del Primer Encuentro de Integrantes de Biodiversidata.


![Primer Encuentro de Integrantes de Biodiversidata - Foto: Juan Grattarola](https://live.staticflickr.com/4856/45306350515_7b87f2ad9d_k.jpg){:standalone .has-text-centered}


#### 2. Recopilar datos primarios de biodiversidad de fuentes heterogéneas, limpiarlos y estandarizarlos.

Se reunieron datos primarios de biodiversidad – es decir, registros a nivel de especie, con información sobre la localización geográfica y fecha de colecta/observación – compartidos por integrantes de Biodiversidata, obtenidos de la literatura primaria y también a partir de bases de datos online.

Los datos luego se harmonizaron taxonómicamente y se estandarizaron siguiendo el estándar *DarwinCore*. El código utilizado para limpiar y estandarizar los datos fue también puesto a disposición de manera abierta en un repositorio de GitHub (bienflorencia/rBiodviersidata).

Finalmente, se generaron las primeras dos bases abiertas de datos primarios de biodiversidad para el Uruguay, primero para vertebrados tetrápodos y luego para plantas vasculares. Reunimos un total de **69,380** registros de más de **600** especies de tetrápodos y **12,470** registros de más de **1,600** especies de plantas vasculares.

|                                             | Tetrápodos | Plantas Vasculares |
|---------------------------------------------|------------|--------------------|
| Rescatados de la literatura                 | 5,664      | 7,715              |
| Aportados por integrantes de Biodiversidata | 5,362      | 1,327              |
| Provenientes de bases de datos online       | 58,355     | 3,428              |  

<br>

#### 3. Publicar la base de datos junto a sus metadatos en formato de Data Paper (artículo de datos).

 Compartimos datos que nunca antes habían sido disponibilizados y logramos también estandarizar datos de la literatura para su reutilización. Ambas bases de datos fueron subidas al repositorio global Zenodo y contaron, además, con sus respectivos Data Papers publicados en Biodiversity Data Journal. Los registros proporcionados por integrantes de Biodiversidata fueron además disponibilizados en GBIF.


[Data paper tetrápodos](https://doi.org/10.3897/BDJ.7.e36226){: .button .is-primary}
[Datos tetrápodos](https://doi.org/10.5281/zenodo.3685897){: .button}  

[Data paper vasculares](https://doi.org/10.3897/BDJ.8.e56850){: .button .is-primary}
[Datos plantas vasculares](https://doi.org/10.5281/zenodo.3954406){: .button}  


#### 4. Desarrollar investigación científica sobre la distribución de especies de vertebrados tetrápodos y plantas vasculares en el Uruguay haciendo uso de los datos recopilados.

A partir de las bases de datos generadas, publicamos el primer estudio que hace uso de los datos ([Grattarola et al. 2020](https://doi.org/10.1038/s41598-020-79074-8)). El objetivo de este trabajo fue entender cómo se distribuye la biodiversidad en el territorio de Uruguay a través del cálculo de múltiples métricas (riqueza de especies, índices de endemismo y cantidad de especies amenazadas) y evaluar si hay congruencia espacial entre estas medidas. También se evaluó cuán eficaces son los actuales esfuerzos de conservación para proteger las áreas donde se acumula la mayor diversidad (también llamados hotspost de biodiversidad).  

Un hallazgo clave fue revelar que un fuerte sesgo de muestreo ha afectado históricamente la definición de los patrones de diversidad en todos los grupos taxonómicos (anfibios, aves, reptiles y mamíferos), y que no es posible saber de manera inequívoca si los patrones de la diversidad biológica que observamos son reales o fabricados por esfuerzos de muestreo heterogéneos. En particular, si las áreas. Este estudio puso en relevancia la crítica situación de déficit de conocimiento en que se encuentra el Uruguay y, al mismo tiempo, planteó una primera aproximación para afrontar esta cuestión a través de proponer áreas prioritarias para futuro esfuerzos de muestreo.

![Figura 4 de Grattarola et al. (2020): Áreas para la priorización del esfuerzo de muestreo a futuro. ](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-020-79074-8/MediaObjects/41598_2020_79074_Fig4_HTML.png?as=webp){:standalone .has-text-centered .size=10}

## Segunda etapa

En una segunda etapa (años 2021 a 2022), el trabajo de Biodiversidata se destinó al desarrollo de dos proyectos, uno con foco en la ciencia comunitaria y su aporte a la generación de datos de biodiversidad y otro con foco en la capacitación de personas para la publicación de datos.


#### 1. NaturalistaUY: la comunidad de iNaturalist para Uruguay.

NaturalistaUY permite a sus usuarios aportar observaciones de cualquier organismo vivo, o rastros del mismo, junto con metadatos espaciotemporales asociados (información sobre la localización y fecha del registro).

La primera serie de eventos de ciencia comunitaria con NaturalistaUY tuvo como objetivo llevar esta herramienta a distintas partes del país para, por un lado, conocer más sobre las especies que habitan en la zona, y por otro, aportar una herramienta novedosa a grupos locales que puedan estar interesados en documentar su biodiversidad. Uruguay es uno de los países con menores niveles de disponibilidad de datos abiertos de biodiversidad (Grattarola et al., 2020) y por esto, los patrones de biodiversidad en el país siguen siendo poco conocidos. La información no solo es limitada para la investigación científica si no para las personas y grupos que habitan los territorios. A través de los eventos, nos planteamos aumentar la cantidad de registros en nuestro país pero, principalmente, difundir el uso de esta herramienta para que grupos locales la puedan usar para su propio beneficio, que puede ser tanto conocer su entorno como defender su territorio. 


#### 2. Ampliación del conocimiento sobre la calidad de los datos de biodiversidad y su publicación en la comunidad hispanohablante.
