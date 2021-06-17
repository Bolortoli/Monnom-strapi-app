module.exports = {
	load: {
		before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
		after: ["parser", "router"],
	},
	settings: {
		cors: {
			enabled: true,
			origin: ["*"],
		},
		parser: {
			enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 2048 * 1024 * 1024 // Defaults to 200mb
	}
		}
	},
};
