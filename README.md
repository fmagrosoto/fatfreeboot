# FATFREEBOOT

![Packagist](https://img.shields.io/badge/Stack-Lamp-yellowgreen.svg)
![Packagist](https://img.shields.io/badge/TypeScript-True-brightgreen.svg)
![Packagist](https://img.shields.io/badge/License-MIT-lightgrey.svg)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Repositorio inicial para una aplicación web basada en Fat Free Framework (PHP) y Bootstrap 4.

Si quieres hacer una página web o **aplicación rápida** y que tenga que ver con bases de datos (MySQL) y un servidor web Apache, entonces puedes usar este repositorio.

Incluye **Fat Free Framework**, que es un farmework para PHP muy ligero y te permite hacer API REST de manera muy sencilla. Puedes consultar la documentación aquí: [Documentación F3](https://fatfreeframework.com/3.6/home).

Además incluye **Bootstrap 4**, uno de los fameworks para CSS más importante. Esto nos permite hacer páginas de manera muy rápida, ya sea usando los estilos del propio framework o haciendo los tuyos propios. Puedes leer la documentación aquí: [Documentación Bootstrap](http://getbootstrap.com/).

Para hacer más fácil el diseño de estilos personalizados, se ha agregado Bootstrap por medio de **node**, con esto podemos tener acceso al CSS del bootstrap usando **Saas**.

Y ya que usamos **node** también he hecho un archivo **GULP** para ejecutar tareas, como transpilar SAAS a CSS, transpilar TypeScript a JS, etc. Lee el archivo ```gulpfile.js``` para más referencia.

En modo de desarrollo, debes de tener instalado un servidor web APACHE, PHP y MySQL; agregar el directorio ```www``` a la carpeta que APACHE usa para los archivos web, ej: httdocs y correrlo desde un dominio virtual. Te recomiendo uses [XAMPP](https://www.apachefriends.org/es/index.html) para que puedas instalar un servidor web de manera rápida y confiable.

También te recomiendo que leas el archivo ```package.json``` para que veas las tareas en **node**.

Por último **y muy importante**, recuerda cambiar tu referencia de GIT ORIGIN hacia tu propio repositorio.

### Para borrar un REMOTE ORIGIN
```git remote rm origin```

### Para crear un REMOTE
```git remote add origin git://tu.url```

### Para hacer las dos en un mismo paso
```git remote set-url origin git://tu.url```


## PROYECTO

* Historia: 2018
* Autor: Fernando Magrosoto V. [@fmagrosoto](https://twitter.com/fmagrosoto)
* Licencia: [MIT](LICENSE)
* Tecnología: PHP, HTML5, CSS3, Javascript
* Frameworks: Fat Free Framework, Bootstrap 4, jQuery, TypeScript

