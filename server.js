var express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    mongoose = require('mongoose');
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
process.env['APPROOT'] = __dirname;
// app.use(bp.urlencoded({extended:true}));
app.use( express.static( path.join( root, './client' )));
app.use( express.static( path.join( root, './bower_components' )));
app.use(bp.json());

require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
