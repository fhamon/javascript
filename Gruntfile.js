module.exports = (grunt) => {
	'use strict';

	grunt.initConfig({});

	const tasks = grunt.file.expand({ filter: 'isFile', cwd: 'tasks' }, ['*']);

	tasks.forEach(task => {
		require(`./tasks/${task}`)(grunt);
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-complexity');

	grunt.registerTask('ci', ['complexity', 'jshint']);
	grunt.registerTask('default', ['ci']);
};