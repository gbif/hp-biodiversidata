---
layout: heroImage
toc: true
lang-ref: acercade
title: Nuestra historia
description: Las etapas que nos llevaron a conformar el Consorcio de Datos de Biodiversidad del Uruguay, generar las primeras bases de datos abiertas para el país y desarrollar investigación sobre la distribución de la biodiversidad del Uruguay
background: /assets/images/banners/180266868.jpg
imageLicense: |
  *Lupinus multiflorus* observed in Uruguay by Andrés Acosta licensed under [CC-BY-NC](http://creativecommons.org/licenses/by-nc/4.0/) via [iNaturalist](https://www.gbif.org/occurrence/3698255731)
height: 50vh
parallax: true
#permalink: /historia
composition:
  - type: heroImage
  - type: pageMarkdown
  - type: features
    data: menu.historia
---

## Primera etapa

El Consorcio de Datos de Biodiversidad del Uruguay fue creado en 2018 por Florencia Grattarola en el marco de su proyecto de doctorado en la University of Lincoln (Reino Unido), financiado por la Agencia Nacional de Investigación e Innovación de Uruguay a través de su programa de Posgrado en el Exterior (POS_EXT_2016_1\_).

Durante la primera etapa (2018 a 2020), Biodiversidata se enfocó en consolidar un grupo de personas, colectar y rescatar datos primarios de biodiversidad, limpiarlos y estandarizarlos, hacer los datos disponibles, y hacer uso de esos datos respondiendo preguntas de investigación.

### 1. Convocar a las partes interesadas en el país (comunidad científica, instituciones de investigación y organismos públicos) para que compartan sus datos de biodiversidad derivados de sus muestreos y/o investigaciones

Se tuvieron reuniones con integrantes de las colecciones de Facultad de Ciencias, Museo Nacional de Historia Natural del Uruguay y el Ministerio de Ambiente a través del nodo GBIF Uruguay. Tras evaluar que la discusión sobre ciencia abierta y apertura de datos derivados de la ciencia en estas instituciones era aún muy incipiente y teniendo en cuenta los plazos del proyecto, se decidió poner foco en la comunidad de investigadores que estuvieran dispuestos a compartir sus datos.

![Primer Encuentro de Integrantes de Biodiversidata - Foto: Juan Grattarola](https://live.staticflickr.com/4856/45306350515_7b87f2ad9d_k.jpg){:standalone .has-text-centered}{:target="_blank"}

Para planificar estratégicamente la creación de Biodiversidata, se realizó un estudio que permitió conocer la percepción de quienes colectan y usan datos en Uruguay ([Grattarola & Pincheira-Donoso 2019](https://doi.org/10.26462/28.1.1){:target="_blank"}). A través de este estudio percibimos que en Uruguay no existe una cultura de compartir datos en forma abierta, que hay una preponderante falta de planificación en el manejo de datos y que esto representa una gran barrera para compartirlos. Además, también percibimos que existe una cultura arraigada sobre el uso de los datos generados sin una visión de reutilización.

Desde Biodiversidata entendimos que para comenzar a cambiar este escenario era necesario empezar por crear una red de personas dispuestas a compartir sus datos y conocimientos, simplificarles el proceso de limpieza y estandarización de los datos y darles crédito en forma de autoría en la publicación de conjuntos de datos y artículos científicos.

La recepción de datos se hizo a través de convocatorias masivas y correos individuales a expertos y expertas identificadas de antemano. En total se contactaron unas 65 personas, de las cuales 53 respondieron positivamente y 14 finalmente compartieron datos (21.5% de las contactadas). Biodiversidata, sus objetivos y el plan a corto y largo plazo fueron finalmente presentados en la Facultad de Ciencias de la Universidad de la República en diciembre de 2018 en el Primer Encuentro de Integrantes de Biodiversidata.

![Afiche que se circuló para la convocatoria](https://pbs.twimg.com/media/EC_TW5LW4AMZNcN?format=jpg&name=large){:standalone .has-text-centered}{:target="_blank"}


### 2. Recopilar datos primarios de biodiversidad de fuentes heterogéneas, limpiarlos y estandarizarlos

Se reunieron datos primarios de biodiversidad – es decir, registros a nivel de especie, con información sobre la localización geográfica y fecha de colecta/observación – compartidos por integrantes de Biodiversidata, obtenidos de la literatura primaria y también a partir de bases de datos online.

Los datos luego se harmonizaron taxonómicamente y se estandarizaron siguiendo el estándar *DarwinCore*. El código utilizado para limpiar y estandarizar los datos fue también puesto a disposición de manera abierta en un repositorio de GitHub (ver [Recursos](/recursos/codigo/){:target="_blank"}).

Finalmente, se generaron las primeras dos bases abiertas de datos primarios de biodiversidad para el Uruguay, una de vertebrados tetrápodos y otra de plantas vasculares. Reunimos un total de **69,380** registros de más de **600** especies de tetrápodos y **12,470** registros de más de **1,600** especies de plantas vasculares.

<br>

|                                             | Tetrápodos | Plantas Vasculares |
|---------------------------------------------|------------|--------------------|
| Rescatados de la literatura                 | 5,664      | 7,715              |
| Aportados por integrantes de Biodiversidata | 5,362      | 1,327              |
| Provenientes de bases de datos online       | 58,355     | 3,428              |  

<br>

### 3. Publicar la base de datos junto a sus metadatos en formato de Data Paper (artículo de datos)

 Compartimos datos que nunca antes habían sido disponibilizados y logramos también estandarizar datos de la literatura para su reutilización. Ambas bases de datos fueron subidas al repositorio global Zenodo y contaron, además, con sus respectivos Data Papers publicados en Biodiversity Data Journal. Los registros proporcionados por integrantes de Biodiversidata fueron además disponibilizados en GBIF.  
 <br>

[Data paper tetrápodos](https://doi.org/10.3897/BDJ.7.e36226){: .button .is-primary}{:target="_blank"}
[Datos tetrápodos](https://doi.org/10.5281/zenodo.3685897){: .button}{:target="_blank"}  

[Data paper plantas vasculares](https://doi.org/10.3897/BDJ.8.e56850){: .button .is-primary}{:target="_blank"}
[Datos plantas vasculares](https://doi.org/10.5281/zenodo.3954406){: .button}{:target="_blank"}  


### 4. Desarrollar investigación científica sobre la distribución de especies de vertebrados tetrápodos y plantas vasculares en el Uruguay haciendo uso de los datos recopilados

A partir de las bases de datos generadas, publicamos el primer estudio que hizo uso de los datos ([Grattarola et al. 2020](https://doi.org/10.1038/s41598-020-79074-8){:target="_blank"}). El objetivo de este trabajo fue entender cómo se distribuye la biodiversidad en el territorio de Uruguay a través del cálculo de múltiples métricas (riqueza de especies, índices de endemismo y cantidad de especies amenazadas) y evaluar si había congruencia espacial entre estas medidas. También se evaluó cuán eficaces eran los esfuerzos de conservación en proteger las áreas donde se acumulaba la mayor diversidad (también llamados hotspost de biodiversidad).  

Un hallazgo clave fue revelar que un fuerte sesgo de muestreo ha afectado históricamente la definición de los patrones de diversidad en todos los grupos taxonómicos (anfibios, aves, reptiles y mamíferos). Debido a esto, no fue posible saber de manera inequívoca si los patrones de la diversidad biológica observados eran reales o fabricados por esfuerzos de muestreo heterogéneos. Este estudio puso en relevancia la crítica situación de déficit de conocimiento en que se encuentra el Uruguay y, al mismo tiempo, planteó una primera aproximación para afrontar esta cuestión a través de proponer áreas prioritarias para futuro esfuerzos de muestreo.

![Figura 4 de Grattarola et al. (2020): Áreas para la priorización del esfuerzo de muestreo a futuro. ](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-020-79074-8/MediaObjects/41598_2020_79074_Fig4_HTML.png?as=webp){:standalone .has-text-centered}

## Segunda etapa

En una segunda etapa (años 2021 a 2022), el trabajo de Biodiversidata se concentró en el desarrollo de dos proyectos, uno con foco en la ciencia comunitaria y su aporte a la generación de datos de biodiversidad y otro con foco en la capacitación de personas para la publicación de datos.


### 1. NaturalistaUY: la comunidad de iNaturalist para Uruguay

La escasez de datos de biodiversidad en Uruguay no es sólo un problema para quienes hacen ciencia, también lo es para la ciudadanía en general. Viendo el potencial para la generación de datos y conocimientos que las iniciativas de ciencia comunitaria estaban teniendo en nuestra región, decidimos embarcarnos en generar nuestro sitio propio para Uruguay.

Fue a través del fondo 'Citizen-science for species discovery' de la National Geographic Society, que creamos [NaturalistaUY](https://naturalista.uy){:target="_blank"}, el portal nacional de [iNaturalist](https://www.inaturalist.org/){:target="_blank"} en Uruguay. El sitio de [naturalista.uy](https://naturalista.uy){:target="_blank"} fue lanzado oficialmente en diciembre del 2021 como una iniciativa conjunta entre Biodiversidata y JULANA.

![](/assets/images/logos/NaturalistaUY-Identity.png){:standalone .image .is-256x256}

La segunda parte del proyecto, estuvo enfocada en desarrollar la primera serie de eventos de ciencia comunitaria con NaturalistaUY. El objetivo fue llevar esta herramienta a distintas partes del país para, por un lado, aumentar la cantidad de registros en nuestro país y conocer más sobre las especies que habitan en la zona, y por otro, aportar una herramienta novedosa a grupos locales que puedan estar interesados en documentar su biodiversidad. Los tres sitios elegidos para realizar los eventos fueron: Quinta del Horno (departamento de San José), Humedal la Curtiembre (Paysandú) y Bella Unión (Artigas).

La elección de los tres sitios en donde se realizaron los eventos fue en parte determinada por nuestro trabajo ([Grattarola et al. 2020](https://doi.org/10.1038/s41598-020-79074-8)).

<img src="https://static.inaturalist.org/wiki_page_attachments/3001-original.png" width="32%"> <img src="https://static.inaturalist.org/wiki_page_attachments/2999-original.png" width="32%"> <img src="https://static.inaturalist.org/wiki_page_attachments/3000-original.png" width="32%">


### 2. Ampliación del conocimiento sobre la calidad de los datos de biodiversidad y su publicación en la comunidad hispanohablante

En Uruguay hasta el momento no existen cursos de formación en manejo y gestión de datos de biodiversidad ([Grattarola and Pincheira-Donoso, 2019](https://doi.org/10.3897/BISS.3.37715){:target="_blank"}). Evidenciando esta necesidad de capacitación de recursos humanos, nos sumamos al proyecto "Ampliando el conocimiento sobre la calidad y publicación de datos sobre biodiversidad en la comunidad hispano hablante".

Este proyecto tuvo como objetivo aumentar la disponibilidad de datos de biodiversidad de alta calidad de la comunidad hispanohablante a través de la red de GBIF, por medio de una serie de formación (en español) sobre calidad, limpieza y publicación de datos. Fue co-organizado por GBIF Argentina, VertNet y Biodiversidata, y contó con la participación de GBIF Colombia y GBIF Costa Rica.

Tanto las charlas como los talleres prácticos y todo el material generado para el curso están disponibles y se pueden acceder libremente.


[Curso CESP-GIBF](/recursos/formacion/cesp/){: .button .is-primary}
