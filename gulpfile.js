var babel = require('gulp-babel');
var del = require('del');
var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var gutil = require('gulp-util');
var mapStyles = require('react-map-styles');
var modify = require('gulp-modify');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

gulp.task('clean', function () {
  return del([__dirname + '/dist/**/*']);
});

gulp.task('webpack:dev', function () {
  return gulp.src(__dirname + '/docs/index.js')
  .pipe(gulpWebpack(require('./webpack.config.js')))
  .pipe(gulp.dest(__dirname + '/dist'));
});

gulp.task('webpack:server', function() {
  var devConfig = require('./webpack.config.js');
  var server = new webpackDevServer(webpack(devConfig), {
    contentBase: "dist/",
    publicPath: "/assets/",
    stats: { colors: true },
    hot: true
  });
  server.listen(8090, "localhost", function (err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'started on port 8090');
  });
});

gulp.task('dev', ['clean', 'webpack:dev', 'webpack:server']);

gulp.task('build', function(done) {
  return gulp.src('./src/**/*')
  .pipe(modify({
    fileModifier: function(file, contents) {
      return mapStyles(contents);
    },
  }))
  .pipe(babel())
  .pipe(gulp.dest('build'));
});