# columpio
Columpio pantallas adobado con react y base de datos sqlite adhoc

Este proyecto solo sirve para que la gente comparta fechas a celebrar con el equipo de trabajo en la pantalla general que hemos okupado ^^

El repositorio consiste en:

- Cms headless Strapi con su base de datos adhoc funcionando con sqlite a las mil maravillas, muy sencillo de manejar. Este permitirá que sean los propios empleados los que administren sus propios acontecimientos, de manera que se respeten un poco más y mejor tanto estos datos, como su tiempo de propagación y en definitiva, una pequeña herramienta para gestionarla

Para accionar el /cms solo debe tener instalado npm 16.17.1 y yarn e introducir los siguientes comandos::

Instala las dependencias necesarias con yarn o npm. Creo que se comporta mejor con yarn, pero si no funciona probad con npm...
yarn install

Este comando levanta el cms
yarn develop

* Las credenciales para acceder a este esperpento se las doy en privado a gente esperpéntica ;)

- Front: Por el momento crearé un pequeño set de llamadas que serán capaz de recuperar correctamente los distintos datos que vamos a desear parsear en la web y de qué modo. Finalmente, dejaré a otros compañeros aderezar cómo debe estar fundamentado el front para que ellos se diviertan, si bien el set de llamadas que voy a proporcionar estarán optimizadas para satisfacer el contexto con axios, y puede que utilice artes graphql para algunos filtrados de datos...

Para accionar la /app que tiene las llamadas iniciales al cms solo debe tener instalado npm e ionic e introducir los siguientes comandos::

Instala las dependencias necesarias
npm install

Levanta la app multiplataforma
ionic serve


Esto ha sido creado para ser muy fácil de montar, tanto que añadiré hasta los Dockerfiles y el docker-compose que necesita para reaccionar correctamente (con traefik también si hay que ponerle dominio interno y demás)

Salud!
