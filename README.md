# GeeksMotion Group Template Alpha 0.6
Ambiente de desarrollo para diseño de sitios.

## Webpack 3
Esta template utiliza Webpack 3 para automatizar procesos.

## Instrucciones

1. Clonar este respositorio
2. Ejecutar `npm install` para instalar las dependencias
3. Ejecutar `npm run dev` para correr servidor de desarrollo
4. Una nueva ventana de navegacion abrirá automáticamente en localhost:8080/
5. Ejecutar `npm run prod`para crear los archivos de produción dentro de una carpeta llamada `dist`.

## Requerimientos

Tener instalado [NodeJS](https://nodejs.org/es/) versión 6 o superior

#### Changelog

###### 12/01/2018
1. Importar bootstrap desde node_modules
2. Importar Font Awesome desde node_modules
3. Eliminar Awesome Font CDN
4. Eliminar jquery.js y bootstrap.min.js de Assets
5. Eliminar Bootstrap fonts
6. Optimizar app.js

###### 08/01/2018
1. Agregar archivos css al css-loader
2. Reconfiguración de HtmlWebpackPlugin para page.html
3. Reconfiguración de page.html
4. Fix comandos npm en package.json

###### 06/12/2017
1. Agregar url-loader
2. Agregar Awesome Font CDN
3. Agregar Metadatos
4. Agregar JQuery
5. Reestructurar archivos SCSS
6. Reestrucuurar archivos JS
7. Eliminar CDN de Bootstrap
8. Agregar inject: false


###### 010/10/2017
1. Reconfiguración de webpack.config.js
2. Agregar page.html

###### 09/10/2017
1. Mejorar rutas relativas de imágenes

###### 08/10/2017
1. Agregar Babel Loader
2. Agregar .ideas a gitignore
3. Agregar elementos SCSS
4. Agregar JQuery CDN
###### 08/10/2017
1. Inicio de Proyecto