
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log("Cookies:", req.cookies, res.cookies);

  if(req.cookies.theme === undefined) {
    res.cookie('theme', 'geocities');
  } else if( req.cookies.theme == 'geocities') {
    res.cookie('theme', 'modern');
  } else {
    res.cookie('theme', 'geocities');
  }

  if(!res.locals) { res.locals = {}};
  res.locals.theme = req.cookies.theme;

  res.render('index', { title: 'atxf.org' });

};

exports.daiquiri = function(req, res) {
	res.render('daiquiri', {title: 'atxf.org - daiquiri'});
};

exports.gatherings = function(req, res) {
	res.render('gatherings', {title: 'atxf.org - gatherings'});
};

exports.interviews = function(req, res) {
	res.render('interviews', {title: 'atxf.org - interviews'});
};

exports.who = function(req, res){
	res.render('who', { title: 'atxf.org - whos who'});
};

exports.web = function(req, res){
	res.render('web', { title: 'atxf.org - web'});
};

exports.faq = function(req, res) {
  res.render('faq', { title: 'atxf.org - faq'});
};

exports.faq__anti_faq = function(req, res) {
	res.render('faq__anti_faq', {title: 'ignored'});
};

exports.faq__atxf_faq = function(req, res) {
	res.render('faq__atxf_faq', {title: 'ignored'});
};

exports.faq__hardy_perennials = function(req, res) {
	res.render('faq__hardy_perennials', {title: 'ignored'});
};

exports.faq__irc = function(req, res) {
	res.render('faq__irc', {title: 'ignored'});
};

exports.faq__spoiler_policy = function(req, res) {
	res.render('faq__spoiler_policy', {title: 'ignored'});
};

exports.faq__spoiler_faq_us_edition = function(req, res) {
	res.render('faq__spoiler_faq_us_edition', {title: 'ignored'});
};

exports.faq__write_an_x_report = function(req, res) {
	res.render('faq__write_an_x-report', {title: 'ignored'});
};

exports.faq__xreport_faq = function(req, res) {
	res.render('faq__xreport_faq', {title: 'ignored'});
};



exports.noContent = function(req, res) {
	res.render('no_content', { title: 'atxf.org - needs title!'});
};