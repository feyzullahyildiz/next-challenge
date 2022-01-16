const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: ['streamcoimg-a.akamaihd.net'],
    }
});
