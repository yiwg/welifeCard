var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/1005*', function(req, res, next) {
  res.render('1005', { title: 'Express' });
});
router.get('/02001*', function(req, res, next) {res.render('02001', { title: 'Express' });});
router.get('/02002*', function(req, res, next) {res.render('02002', { title: 'Express' });});
router.get('/02003*', function(req, res, next) {res.render('02003', { title: 'Express' });});
router.get('/02004*', function(req, res, next) {res.render('02004', { title: 'Express' });});
router.get('/02005*', function(req, res, next) {res.render('02005', { title: 'Express' });});
router.get('/02006*', function(req, res, next) {res.render('02006', { title: 'Express' });});
router.get('/02101*', function(req, res, next) {res.render('02101', { title: 'Express' });});
router.get('/02102*', function(req, res, next) {res.render('02102', { title: 'Express' });});
router.get('/02103*', function(req, res, next) {res.render('02103', { title: 'Express' });});
router.get('/02104*', function(req, res, next) {res.render('02104', { title: 'Express' });});
router.get('/02105*', function(req, res, next) {res.render('02105', { title: 'Express' });});
router.get('/02401*', function(req, res, next) {res.render('02401', { title: 'Express' });});
router.get('/03001*', function(req, res, next) {res.render('03001', { title: 'Express' });});
router.get('/03002*', function(req, res, next) {res.render('03002', { title: 'Express' });});
router.get('/03003*', function(req, res, next) {res.render('03003', { title: 'Express' });});
router.get('/1005*', function(req, res, next) {res.render('1005', { title: 'Express' });});
router.get('/1008*', function(req, res, next) {res.render('1008', { title: 'Express' });});
router.get('/1010*', function(req, res, next) {res.render('1010', { title: 'Express' });});
router.get('/1015*', function(req, res, next) {res.render('1015', { title: 'Express' });});
router.get('/1016*', function(req, res, next) {res.render('1016', { title: 'Express' });});
router.get('/1019*', function(req, res, next) {res.render('1019', { title: 'Express' });});
router.get('/1020*', function(req, res, next) {res.render('1020', { title: 'Express' });});
router.get('/1021*', function(req, res, next) {res.render('1021', { title: 'Express' });});
router.get('/1022*', function(req, res, next) {res.render('1022', { title: 'Express' });});
router.get('/1025*', function(req, res, next) {res.render('1025', { title: 'Express' });});
router.get('/1026*', function(req, res, next) {res.render('1026', { title: 'Express' });});
router.get('/1029*', function(req, res, next) {res.render('1029', { title: 'Express' });});
router.get('/1031*', function(req, res, next) {res.render('1031', { title: 'Express' });});
router.get('/1032*', function(req, res, next) {res.render('1032', { title: 'Express' });});
router.get('/1034*', function(req, res, next) {res.render('1034', { title: 'Express' });});
router.get('/1035*', function(req, res, next) {res.render('1035', { title: 'Express' });});
router.get('/2005*', function(req, res, next) {res.render('2005', { title: 'Express' });});
router.get('/2006*', function(req, res, next) {res.render('2006', { title: 'Express' });});
router.get('/2007*', function(req, res, next) {res.render('2007', { title: 'Express' });});
router.get('/2008*', function(req, res, next) {res.render('2008', { title: 'Express' });});
router.get('/2010*', function(req, res, next) {res.render('2010', { title: 'Express' });});
router.get('/2011*', function(req, res, next) {res.render('2011', { title: 'Express' });});
router.get('/2012*', function(req, res, next) {res.render('2012', { title: 'Express' });});
router.get('/2013*', function(req, res, next) {res.render('2013', { title: 'Express' });});
router.get('/2014*', function(req, res, next) {res.render('2014', { title: 'Express' });});
router.get('/2015*', function(req, res, next) {res.render('2015', { title: 'Express' });});
router.get('/2017*', function(req, res, next) {res.render('2017', { title: 'Express' });});
router.get('/2018*', function(req, res, next) {res.render('2018', { title: 'Express' });});
router.get('/2019*', function(req, res, next) {res.render('2019', { title: 'Express' });});
router.get('/2020*', function(req, res, next) {res.render('2020', { title: 'Express' });});
router.get('/2021*', function(req, res, next) {res.render('2021', { title: 'Express' });});
router.get('/2022*', function(req, res, next) {res.render('2022', { title: 'Express' });});
router.get('/2023*', function(req, res, next) {res.render('2023', { title: 'Express' });});
router.get('/2024*', function(req, res, next) {res.render('2024', { title: 'Express' });});
router.get('/2025*', function(req, res, next) {res.render('2025', { title: 'Express' });});
router.get('/2027*', function(req, res, next) {res.render('2027', { title: 'Express' });});
router.get('/2029*', function(req, res, next) {res.render('2029', { title: 'Express' });});
router.get('/2030*', function(req, res, next) {res.render('2030', { title: 'Express' });});
router.get('/2031*', function(req, res, next) {res.render('2031', { title: 'Express' });});
router.get('/3002*', function(req, res, next) {res.render('3002', { title: 'Express' });});
router.get('/3004*', function(req, res, next) {res.render('3004', { title: 'Express' });});
router.get('/3005*', function(req, res, next) {res.render('3005', { title: 'Express' });});
router.get('/3006*', function(req, res, next) {res.render('3006', { title: 'Express' });});
router.get('/3007*', function(req, res, next) {res.render('3007', { title: 'Express' });});
router.get('/4004*', function(req, res, next) {res.render('4004', { title: 'Express' });});
router.get('/4005*', function(req, res, next) {res.render('4005', { title: 'Express' });});
router.get('/4011*', function(req, res, next) {res.render('4011', { title: 'Express' });});
router.get('/5001*', function(req, res, next) {res.render('5001', { title: 'Express' });});
router.get('/5002*', function(req, res, next) {res.render('5002', { title: 'Express' });});
router.get('/5003*', function(req, res, next) {res.render('5003', { title: 'Express' });});
router.get('/5004*', function(req, res, next) {res.render('5004', { title: 'Express' });});
router.get('/5006*', function(req, res, next) {res.render('5006', { title: 'Express' });});
router.get('/5007*', function(req, res, next) {res.render('5007', { title: 'Express' });});
router.get('/5008*', function(req, res, next) {res.render('5008', { title: 'Express' });});
router.get('/5009*', function(req, res, next) {res.render('5009', { title: 'Express' });});
router.get('/6001*', function(req, res, next) {res.render('6001', { title: 'Express' });});
router.get('/9370*', function(req, res, next) {res.render('9370', { title: 'Express' });});
router.get('/birthday*', function(req, res, next) {res.render('birthday', { title: 'Express' });});
router.get('/config*', function(req, res, next) {res.render('config', { title: 'Express' });});
router.get('/config*', function(req, res, next) {res.render('config', { title: 'Express' });});
router.get('/editcard*', function(req, res, next) {res.render('editcard', { title: 'Express' });});
router.get('/error*', function(req, res, next) {res.render('error', { title: 'Express' });});
router.get('/festival*', function(req, res, next) {res.render('festival', { title: 'Express' });});
router.get('/fontcard*', function(req, res, next) {res.render('fontcard', { title: 'Express' });});
router.get('/footer*', function(req, res, next) {res.render('footer', { title: 'Express' });});
router.get('/gaoguai*', function(req, res, next) {res.render('gaoguai', { title: 'Express' });});
router.get('/gaoguai*', function(req, res, next) {res.render('gaoguai', { title: 'Express' });});
router.get('/greeting*', function(req, res, next) {res.render('greeting', { title: 'Express' });});
router.get('/greeting*', function(req, res, next) {res.render('greeting', { title: 'Express' });});
router.get('/index-1*', function(req, res, next) {res.render('index-1', { title: 'Express' });});
router.get('/index-2*', function(req, res, next) {res.render('index-2', { title: 'Express' });});
router.get('/index-3*', function(req, res, next) {res.render('index-3', { title: 'Express' });});
router.get('/index*', function(req, res, next) {res.render('index', { title: 'Express' });});
router.get('/index*', function(req, res, next) {res.render('index', { title: 'Express' });});
router.get('/love*', function(req, res, next) {res.render('love', { title: 'Express' });});
router.get('/love*', function(req, res, next) {res.render('love', { title: 'Express' });});
router.get('/show3*', function(req, res, next) {res.render('show3', { title: 'Express' });});
router.get('/show3*', function(req, res, next) {res.render('show3', { title: 'Express' });});
router.get('/showcard_nosound*', function(req, res, next) {res.render('showcard_nosound', { title: 'Express' });});
router.get('/showcard_weixin*', function(req, res, next) {res.render('showcard_weixin', { title: 'Express' });});
router.get('/showcard_weixin*', function(req, res, next) {res.render('showcard_weixin', { title: 'Express' });});
router.get('/zhufu*', function(req, res, next) {res.render('zhufu', { title: 'Express' });});
router.get('/zhufu*', function(req, res, next) {res.render('zhufu', { title: 'Express' });});

module.exports = router;
