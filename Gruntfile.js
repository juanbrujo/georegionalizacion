module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("georegionalizacion.jquery.json"),
        meta: {
            banner: "/*\n" +
                " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
                " *  <%= pkg.description %>\n" +
                " *\n" +
                " *  <%= pkg.homepage %>\n" +
                " *\n" +
                " *  Por: <%= pkg.author.name %> |  <%= pkg.author.twitter %>\n" +
                " *  Licencia: <%= pkg.licenses[0].type %>\n" +
                " */\n\n"
        },
        uglify: {
            options: {
                banner: "<%= meta.banner %>"
            },
            build: {
                src: 'dist/jquery.georegionalizacion-chile_0.9.js',
                dest: 'dist/jquery.georegionalizacion-chile_0.9.min.js'
            }
        },
        jshint: {
            files: ["dist/jquery.georegionalizacion-chile_0.9.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'watch']);
    grunt.registerTask("testjs", ["jshint"]);

};