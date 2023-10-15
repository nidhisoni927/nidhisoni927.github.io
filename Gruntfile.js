module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                expand: true,
                cwd: 'src/',
                src: ['**/*.html'],
                dest: 'docs/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['htmlmin']);
};

