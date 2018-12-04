var gulp = require('gulp')
var header = require('gulp-header')
var pkg = require('./package.json')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')

var banner = ['/*!\n',
  ' * <%= pkg.description %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright ' + (new Date()).getFullYear(), '\n',
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

// Transpilar archivos Typescript
gulp.task('type', function () {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./www/js'))
})

// Concatenar archivos de Bootstrap.
// Esta tarea solo se usa una vez y después de hacer npm install
gulp.task('bundle', function () {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
    './node_modules/popper.js/dist/umd/popper.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(concat('bundle.js', { newLine: ';' }))
    .pipe(gulp.dest('./www/js'))
})

// Copiar la carpeta de FONTAWESOME
gulp.task('awesome', function () {
  gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(gulp.dest('./www/webfonts'))
})

// Tarea por default
gulp.task('default', ['type', 'sass', 'bundle', 'awesome'])

// Observador
gulp.task('watch', function () {
  gulp.watch('source/scss/**/*.scss', ['sass'])
  gulp.watch('source/ts/**/*.ts', ['type'])
})
