<h1>Informacion de interes<h1>

<p>La siguiente prueba se realizo con:<p>
<p>Front-end: <p>
<ul>
<li>Angular<li>
<li>HTML<li>
<li>CSS<li>
</ul>

<p>Back-end: <p>
<ul>
<li>NodeJS<li>
<li>Express<li>
<li>Sequelize<li>
</ul>

<p>Base de datos: <p>
<ul>
<li>Postgresql<li>
<li>Docker compose<li>
</ul>

<p>Integracion con Circleci<p>

<h1>Entorno de desarrollo local</h1>

<p>LDIgitalCLIENT(localhost:4200): <span>se ejecuta con "ng serve --o", este es el front, donde se pueden agregar personas apartir de un formulario reactivo y asi mismo listas las personas creadas</span> <p>

<p>LDigitalAPI(localhost:3001): <span>se ejecuta con "npm start", este es el back, api-res que respondera a 3 endpints: 1.http:localhost/person/create, 2.http:localhost/person/get y 3.http:localhost/person/get?email=ejemplo@ejemplo.com</span> <p>

<p>NOTA: Si en el momento de la ejecucion algo anda mal, recuerde configurar las variables de entorno ".env" en la carpeta DigitalAPI <p>

<ul>
<li>DB_USER=USUARIO DE CONFIGURACION POSTGRES
<li>DB_PASSWORD= CONTRASEÑA DEFINIDA PARA USUARIO DE CONFIGURACION
<li>DB_HOST= localhost:5432/ldigital
</ul>

<p>Como ultima recomendacion si algo falla, crear la base de datos de forma local con el nombre de ldigital y en caso de que postgres no este corriendo en el puerto default (5432) actualizar la variable de entorno<p>