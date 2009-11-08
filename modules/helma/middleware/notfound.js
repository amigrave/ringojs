
var Response = require('helma/webapp/response').Response;

/**
 * Standard 404 page
 */
exports.middleware = function(app) {
    return function(env) {
        try {
            return app(env);
        } catch (e if e.notfound) {
            var res = new Response();
            var msg = 'Not Found';
            res.status = 404;
            res.contentType = 'text/html';
            res.writeln('<html><title>', msg, '</title>');
            res.writeln('<body><h2>', msg, '</h2>');
            res.writeln('<p>The requested URL', env.PATH_INFO, 'was not found on the server.</p>');
            res.writeln('</body></html>');
            return res.close();
        }
    };
}