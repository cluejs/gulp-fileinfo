const size = require('gulp-size');

module.exports = function (options) {
    options = Object.assign({
        pretty: true,
        showFiles: true,
        showTotal: true
    }, options);

    return size(options);
};