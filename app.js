
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , url = require('url');
//  , params = require('./params');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.cookieSession({secret: 'thetruthisoutthere'}));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/archive', express.static(path.join(__dirname, 'archive')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
  app.set('view options', { debug: true });
});

// Applying theme
app.all('*', function(req, res, next) {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    var newTheme = '';
    
    if(query.theme) {
      newTheme = query.theme;
    } else if(req.cookies && req.cookies.theme) {
      newTheme = req.cookies.theme;
    }

    if('geocities,modern'.indexOf(newTheme) == -1) {
      newTheme = 'modern';
    }

    if(!res.locals) { res.locals = {};}

    res.locals.theme = newTheme;
    res.cookie('theme', newTheme);
    next();
  });

app.get('/', routes.index);
app.get('/daiquiri', routes.daiquiri);
app.get('/gatherings', routes.gatherings);
app.get('/interviews', routes.interviews);
app.get('/who', routes.who);
app.get('/web', routes.web);
app.get('/faqs', routes.faq);
app.get('/faq__anti_faq', routes.faq__anti_faq);
app.get('/faq__atxf_faq', routes.faq__atxf_faq);
app.get('/faq__hardy_perennials', routes.faq__hardy_perennials);
app.get('/faq__irc', routes.faq__irc);
app.get('/faq__spoiler_faq_us_edition', routes.faq__spoiler_faq_us_edition);
app.get('/faq__spoiler_policy', routes.faq__spoiler_policy);
app.get('/faq__write_an_x-report', routes.faq__write_an_x_report);
app.get('/faq__xreport_faq', routes.faq__xreport_faq);

app.get('/rel', routes.noContent);
app.get('/tan', routes.noContent);
app.get('/merch', routes.noContent);
app.get('/admin', routes.noContent);
app.get('/quotewar', routes.noContent);

app.get('/brisxf', routes.noContent);
app.get('/melbxf', routes.noContent);
app.get('/sydxd', routes.noContent);
app.get('/otherxf', routes.noContent);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
