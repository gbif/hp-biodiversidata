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
  - type: split
    data: about.gbif
---


<div class="field">
  <label class="label">Nombre</label>
  <div class="control">
    <input class="input" type="text" placeholder="Texto">
  </div>
</div>

<div class="field">
  <label class="label">Mail</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" required type="email" placeholder="Correo electrónico">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Asunto</label>
  <div class="control">
    <input class="input" type="text" placeholder="Texto">
  </div>
</div>

<div class="field">
  <label class="label">Mensaje</label>
  <div class="control">
    <textarea class="textarea" placeholder="Texto"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Enviar</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
