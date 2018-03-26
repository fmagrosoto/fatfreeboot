<?php

$f3 = require('f3/base.php');
$f3->set('AUTOLOAD','clases/');
$f3->set('LANGUAGE', 'es-MX');
date_default_timezone_set('America/Mexico_City');

// INICIO
$f3->route('GET /', function ($f3) {
  echo Template::instance()->render('vistas/principal.html');
});

#######################
## INICIAR FRAMEWORK ##
#######################
$f3->run();