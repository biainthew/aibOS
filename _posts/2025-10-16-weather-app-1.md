---
layout: post
title: "Weather App 1"
date: 2023-03-08
categories: [general]
tags: [Vue]
excerpt_separator: ""
---



## Vuetify 사용하기


```javascript
npm install vuetify
```


```javascript
new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
```


[설명](https://goodteacher.tistory.com/85?category=774667) not that important


```javascript
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')
```


### elevation - 그림자 정도


[embed](https://vuetifyjs.com/en/styles/elevation/)


[ongoing](https://github.com/LoccBui/Weather-App-API-Using-VueJS/blob/master/weather-app/src/components/Weather.vue)


[https://vuejsexamples.com/weather-app-api-using-vuejs/](https://vuejsexamples.com/weather-app-api-using-vuejs/)

