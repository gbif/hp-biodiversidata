---
layout: heroImage
#lang-ref: home
title: Contacto
description: |
background: https://inaturalist-open-data.s3.amazonaws.com/photos/162124693/original.jpg
height: 80vh
imageLicense: |
  *Tillandsia aeranthos* observed in Uruguay by Guillermo Menéndez licensed under [CC BY-NC](http://creativecommons.org/licenses/by-nc/4.0/) via [iNaturalist](https://www.gbif.org/occurrence/3772595479)
height: 50vh
styleForms: true
composition:
  - type: heroImage # the block type
  - type: pageMarkdown
---

<form
  method="post"
  action="https://public.herotofu.com/v1/648ea910-e759-11ed-b24a-93241516dd10"
  accept-charset="UTF-8">

  <div class="field">
    <label class="label">Nombre</label>
    <div class="control">
      <input class="input" name="name" type="text" placeholder="Texto">
    </div>
  </div>

  <div class="field">
    <label class="label">Mail</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" required name="email" type="email" placeholder="Correo electrónico">
      <span class="icon is-small is-left">
        <i class="fa fa-envelope"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label class="label">Asunto</label>
    <div class="control">
      <input class="input" name="subject" type="text" placeholder="Texto">
    </div>
  </div>

  <div class="field">
    <label class="label">Mensaje</label>
    <div class="control">
      <textarea class="textarea" name="message" placeholder="Texto"></textarea>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button type="submit" class="button is-primary">Enviar</button>
      <div style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;" aria-hidden="true">
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
      </div>
    </div>
  </div>
</form>
