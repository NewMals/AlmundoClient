# AlmundoClient
Front-end para la aplicación de prueba para Almundo

- Para utilizar este proyecto se necesita tener las siguientes herramientas

- Descargar npm y node js en la version (6.11.0 en adelante)
```sh
    https://nodejs.org/en/
```
    
- ionic 
```sh
    npm install -g ionic    
```
- git
```sh
    https://git-scm.com/downloads
```
- Clonar proyecto
```sh
    git clone https://github.com/NewMals/AlmundoClient.git
```
- Luego ingresar a la carpeta generada y ejecutar
```sh
    npm install --save
```
# Lanzar Aplicacion

 - Ejecutar en la linea de comandos a nivel donde se encuentra el proyecto
```sh
    ionic serve
```
# Agregar plataformas para generar los archivos correspondientes

 - para web 
```sh
    cordova platform add browser
```
 - para android 
```sh
    cordova platform add android
```

# Generar proyecto modo produccion

para web 
```sh
    cordova build browser --prod --release 
```
para android
```sh
    cordova build android --prod --release 
```

# Generar proyecto modo desarrollo

para web 
```sh
    cordova build browser 
```

para app
```sh
    cordova build android 
```