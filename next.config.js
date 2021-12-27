const { withLayer0, withServiceWorker } = require("@layer0/next/config");

module.exports = withLayer0({
	layer0SourceMaps: true,

	webpack5: true,
});
