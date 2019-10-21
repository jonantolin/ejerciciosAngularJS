# ejerciciosAngularJS

<h2>UniverApp</h2>

<p>En esta aplicación veremos una serie de ejercicios para familiarizarnos con AngularJS. 
Empezaremos por los más sencillos entendiendo la sintaxis y cómo se comunica la vista HTML con la lógica JavaScript a través de AngularJS y 
seguiremos aumentando progresivamente la complejidad a medida que vayamos aprendiendo conceptos.</p>

![Alt text](https://github.com/jonantolin/ejerciciosAngularJS/blob/master/resources/Captura_app.PNG)

<p>Cada ejercicio trata un tema en particular pero segun se van complicando aparecen nuevas características que no necesariamente tienen su propio apartado</p>
<p>Algunas de estas características están explicadas en los comentarios del código o son intuitivas para un programador</p>
<p>Algunas de estas características (como filtros, services, etc) aparecen en <code>app.js</code> o en los diferentes controladores.</p>
<p>En los ejercicios se ven las siguientes características de AngularJS:</p>

<ul>
  <li>Sintaxis</li>
  <li>Directivas: ng-repeat, ng-show, ng-disabled, etc.</li>
  <li>Filtros (del core y propios)</li>
  <li>Controladores</li>
  <li>Componentes</li>
  <li>Inyeccion de dependencias</li>
  <li>Servicios: value, constant, service, providers...</li>
  <li>Validación de formularios</li>
  <li>Conexión con servicios REST</li>
  <li>CRUDs (Create, Read, Update, Delete)</li>
</ul>



<h4>Requisitos adicionales</h4>

<p><strong>IMPORTANTE:</strong> Algunos ejercicios requieren arrancar un servidor REST en este caso json-server</p>
<p>Vas a necesitar si no lo tienes instalar npm para a continuación instalar json-server</p>
<p><a href="https://github.com/typicode/json-server" target="_blank">Aquí puedes ver el github de json-server</a></p>
<p>El proyecto ya tiene su archivo db.json que es donde se almacena la información pero necesitarás arrancarlo de esta forma:</p>

<ol>
  <li>En primer lugar instala node.js que ya viene con npm de <a href="https://nodejs.org/es/" target="_blank">aquí</a></li>
  <li>En la consola, situate donde quieras mientras estés en C: y ejecuta este comando: <code>npm install -g json-server</code></li>
  <li>Para arrancar el servicio situate en la consola en la carpeta del proyecto (UniverApp) y ejecuta: <code>json-server --watch db.json</code></li>
</ol>

<p><strong>IMPORTANTE:</strong> El ejercicio CRUD del navbar consume un servicio REST local creado en Java que en su momento utilicé en Eclipse</p>
<p>Puedes descargar este proyecto de servicio REST con Spring desde <a href="https://github.com/jonantolin/apiRestMusicOnClud" target="_blank">aquí</a>, e importarlo en Eclipse.</p>
<p>Adicionalmente utiliza una Base de Datos mysql. Puedes descargar MySql Workbench y crear una base de datos nueva con el nombre <code>musiconcloud</code> y 
al arrancar el proyecto desde Eclipse, Spring se encargará de crear las tablas. Agrega algunas canciones y categorias para probarlo. </p>

<h4>Notas adicionales</h4>
<p>Desde el navbar en la pestaña "ANTERIORES" se pueden acceder a los ejerciciós más básicos hechos previamente</p>

![Alt text](https://github.com/jonantolin/ejerciciosAngularJS/blob/master/resources/Captura_anteriores.PNG)

<p>El último ejercicio del menú de navegación (Pokemones) es especialmente interesante porque junta casi todo lo visto.</p>
<p>Es un listado de Pokémons que utiliza la <a href="https://pokeapi.co/" target="_blank">API Pokémon</a>.</p>
<p>En este ejercicio se puede ver y entender el funcionamiento de las <strong>promesas</strong> para manejar el funcionamiento asíncrono de 
las peticiones a la API.</p>
<p><strong>Recomiendo leer los comentarios del código de pokemonProvider.js donde explico este funcionamiento.</strong></p>
