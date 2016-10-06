module.exports = {
	files: {
		javascripts: {
			joinTo: {
				'vendor.js': /^(?!app)/,
				'app.js': /^app/
			}
		},
		stylesheets: {
			joinTo: {
				'app.css': /^app/,
				'vendor.css': /^vendor/
			},
			order: {
				before: [
					'vendor/semantic-ui-css/semantic.css'
				]
			}
		}
	},

	plugins: {
		babel: {
			presets: ['latest', 'react']
		},
		copycat:{
			"../vendor/semantic-ui-css" : ["node_modules/semantic-ui-css/semantic.css"],
			verbose : false,
			onlyChanged: true
		}
	}
};
