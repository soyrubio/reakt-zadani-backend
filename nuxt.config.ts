// https://nuxt.com/docs/api/configuration/nuxt-configs

export default defineNuxtConfig({
app: {
head: {
charset: 'utf-8',
title: 'Reakt úkol',
link:[
],
meta: [
{name: "msapplication-TileColor", content:"#000000"},
{name: "theme-color", content:"#ffffff"},
],
}
},
css: ['~/assets/styles/styles.css'],
modules: ['nuxt-font-loader'],
fontLoader: {
external: [
{
src: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
family: 'Inter',
class: 'font-inter'
}
]
},
postcss: {
plugins: {
tailwindcss: {},
autoprefixer: {}
},
},
build: { transpile: ['yup', 'lodash', '@vee-validate/rules'] },
})