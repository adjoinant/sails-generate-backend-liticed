/**
 * sails-generate-backend-liticed
 * 
 * Usage:
 * `sails-generate-backend-liticed`
 * 
 * @type {Object}
 */
module.exports = {
	targets: {
		'.': { exec: function (scope, cb) {
			console.log('Running generator (sails-generate-backend-liticed) @ `'+scope.rootPath+'`...');
			cb();
		} }
	}
};
