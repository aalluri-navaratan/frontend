const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const pify = require('pify');
const uglify = require('uglify-js');

const readFileP = pify(fs.readFile);
const writeFileP = pify(fs.writeFile);

const { target, vendor } = require('../../config').paths;

const dest = path.resolve(target, 'javascripts');

module.exports = {
    description: 'Bundle polyfill.io fallback',
    task: () => {
        mkdirp.sync(dest);
        return readFileP(
            path.resolve(
                vendor,
                'javascripts',
                'polyfillio.es6.es7.default.IE9.js'
            ),
            'utf8'
        )
            .then(src => uglify.minify(src, { fromString: true }).code)
            .then(src => writeFileP(path.resolve(dest, 'polyfills.js'), src));
    },
};