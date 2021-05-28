const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();


router.get('/',ctx => ctx.body='<h1>index sayfası</h1>');
router.get('/hakkimda',ctx => ctx.body='<h1>hakkımda sayfası</h1>');
router.get('/iletisim',ctx => ctx.body='<h1>iletişim sayfası</h1>');

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);