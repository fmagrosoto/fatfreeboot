var gulp = require('gulp')
var header = require('gulp-header')
var pkg = require('./package.json')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

var banner = ['/*!\n',
  ' * <%= pkg.description %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright ' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Este es otro proyecto de dIGITAE | Fábrica de Soluciones. \n',
  ' * Visítanos: www.digitae.com.mx\n',
  ' */\n\n\n\n\n',
  ''
].join('')

// Minificar archivos SCSS y guardarlos en otra carpeta
gulp.task('sass', function () {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('www/css'))
})

// Minificar archivos javascript, guardarlos en otra carpeta y renombrarlos
gulp.task('minJS', function () {
  gulp.src('source/js/*.js')
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('www/js/'))
})

// Copiar archivos de terceros y pasarlos a los respectivos directorios.
// Esta tarea solo se usa una vez y después de hacer npm install
gulp.task('copy', function () {
  // jQuery
  gulp.src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('www/js'))

  // Bootstrap
  gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest('www/js'))

  // Popper
  gulp.src(['node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('www/js'))
})

// Concatenar archivos de Bootstrap
// Esta tarea solo se usa una vez y después de hacer npm install
// OJO Es copy o bundle, una de dos... no las dos.
gulp.task('bundle', function () {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/popper.js/dist/umd/popper.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(concat('bundle.js', { newLine: ';' }))
    .pipe(gulp.dest('./www/js'))
})

// Tarea por default
gulp.task('default', ['sass', 'minJS'])

// Observador
gulp.task('watch', function () {
  gulp.watch('source/js/*.js', ['minJS'])
  gulp.watch('source/scss/**/*.scss', ['sass'])
})
