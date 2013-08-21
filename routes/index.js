
/*
 * GET home page.
 */

exports.index = function(req, res){
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

exports.noContent = function(req, res) {
	res.render('no_content', { title: 'atxf.org - needs title!'});
};