var webpack = require('webpack-stream'),
    gulp = require('gulp'),
    gulprimraf = require('gulp-rimraf');

var assetsDir = 'assets/';            // folder with sources
var productionDir = '../www/assets/'; // folser with compile sources


var resourceCacheDir = '../www/core/cache/resource/';
var pdoToolsCacheDir = '../www/core/cache/default/pdotools/';
var snippetsCacheDir = '../www/core/cache/includes/elements/modsnippet/';
var scriptsCacheDir = '../www/core/cache/scripts/elements/modsnippet/';
var pluginsScriptCacheDir = '../www/core/cache/scripts/elements/modplugin/';
var pluginsCacheDir = '../www/core/cache/includes/elements/modplugin/';
var templatesDir = '../www/core/components/gitmodx/elements/templates/';
var snippetsDir = '../www/core/components/gitmodx/elements/snippets/';
var chunksDir = '../www/core/components/gitmodx/elements/chunks/';
var pluginsDir = '../www/core/components/gitmodx/elements/plugins/';

gulp.task('webpack', function(){
    return gulp.src(assetsDir + 'js/vue/app.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest(productionDir+'js/vue/'));
});

//MODX CLEAN CACHE
gulp.task('clean-resources-cache',function () {
    return gulp.src(resourceCacheDir + '*', {read: false})
        .pipe(gulprimraf({force: true}));
});

gulp.task('clean-pdotools-cache',function(){
    return gulp.src(pdoToolsCacheDir + '**/*.php', {read: false})
        .pipe(gulprimraf({force:true}));
});

gulp.task('clean-snippets-cache',function(){
    return gulp.src(snippetsCacheDir + '*', {read: false})
        .pipe(gulprimraf({force:true})) && gulp.src(scriptsCacheDir + '*', {read: false})
        .pipe(gulprimraf({force:true}));
});

gulp.task('clean-plugins-cache',function(){
    return gulp.src(pluginsCacheDir + '*', {read: false})
        .pipe(gulprimraf({force:true})) && gulp.src(pluginsScriptCacheDir + '*', {read: false})
        .pipe(gulprimraf({force:true}));
});

//WATCH
gulp.task('watch', function (done) {
    gulp.watch(assetsDir+'js/vue/**/*', gulp.series('webpack'));

    gulp.watch(templatesDir + '**/*.tpl', gulp.series('clean-resources-cache','clean-pdotools-cache','clean-snippets-cache'));
    gulp.watch(chunksDir + '**/*.tpl', gulp.series('clean-resources-cache','clean-pdotools-cache','clean-snippets-cache'));
    gulp.watch(snippetsDir + '**/*.php', gulp.series('clean-resources-cache','clean-pdotools-cache','clean-snippets-cache'));
    gulp.watch(pluginsDir + '**/*.php', gulp.series('clean-plugins-cache'));

    done();
});