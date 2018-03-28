var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/allCake', function *(next) {
    yield this.render('index', {
        title: 'Hello all cake!'
    });
});

router.get('/allCake2', function *(next) {
    yield this.render('index', {
        title: 'Hello all cake 2!'
    });
});

router.get('/login', function *(next) {
    yield this.render('user/login', {
    });
});
router.get('/register', function *(next) {
    yield this.render('user/register', {
    });
});
router.get('/product_details', function *(next) {
    yield this.render('product_details', {
    });
});
router.get('/napoleon', function *(next) {
    yield this.render('napoleon', {
    });
});
router.get('/userCenter', function *(next) {
    yield this.render('user/userCenter', {
    });
});
module.exports = router;
