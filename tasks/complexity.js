module.exports = (grunt) => {
	'use strict';

	grunt.config.merge({
		complexity: {
			generic: {
				src: ['src/**/*.js'],
				exclude: [
					'src/utils/keys.js',
					'src/core/*.js'
				],
				options: {
					errorsOnly: false,
					cyclomatic: 15,
					halstead: 25,
					maintainability: 90
				}
			}
		}
	});
};
