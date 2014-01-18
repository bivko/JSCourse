module.export = function (grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {},
			css: {
				src: ['css/*.css'],
				dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.css'
			},
			js: {}
		},
		package: {
			options:{
				pkg: "<%= pkg %>"
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['concat']);

}