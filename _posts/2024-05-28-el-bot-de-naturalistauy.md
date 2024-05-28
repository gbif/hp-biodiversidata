---
title:  "Nueva herramienta: el Bot de NaturalistaUY"
preTitle: "7 de marzo, 2024"
date: 2024-03-06
categories: ["NaturalistaUY"]
#lang-ref: dataset plantas gbif
background: /assets/images/posts/bot_naturalistauy.png
imageLicense: |
  Photo by [Phillip Glickman](https://unsplash.com/@phillipglickman) via [Unsplash](https://unsplash.com/photos/green-and-multicolored-robot-figurine-2umO15jsZKM)
---

## Creamos un bot para automatizar la detección de registros novedosos en Uruguay

Todos los días se suben en promedio 75 observaciones a **NaturalistaUY**. Muchas de estas observaciones registran especies comunes de nuestro país, pero cada tanto también se registran especies sumamente raras y únicas para Uruguay y el mundo. ¿Cómo podemos documentar estos hallazgos? Para esto decidimos crear un bot.

El [bot de NaturalistaUY](https://ecoevo.social/@Naturalista@bots.uy) está programado para revisar registros diarios a través de consultas a la API de iNaturalist y destacar aquel que documente la especie más rara cargada el mismo día en la semana anterior. Esto lo hace calculando cuántas veces se había registrado antes esa especie en Uruguay y cuántas en iNaturalist, es decir, en la plataforma en general. Hacia adelante, también queremos poder destacar observadores, identificadores, lugares de nuestro país y proyectos.


***

[Accedé al bot de NaturalistaUY](https://ecoevo.social/@Naturalista@bots.uy){: .button .is-primary} [Blog post](https://www.naturalista.uy/blog/94967-lo-esencial-es-invisible-a-los-ojos-pero-no-a-los-bots){: .button}{:target="_blank"} [Repositorio GitHub](https://www.naturalista.uy/blog/94967-lo-esencial-es-invisible-a-los-ojos-pero-no-a-los-bots){: .button}{:target="_blank"}
