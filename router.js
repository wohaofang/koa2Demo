const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// log request URL
app.use(async (ctx, next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next()
})

//add url-router
router.get('/hello', async(ctx,next)=>{
    ctx.response.body = `<h1>this hello page</h1>`
})

router.get('/hello/:name', async(ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello, ${name}!</h1>`
})

router.get('/' , async(ctx,next)=>{
    ctx.response.body = `<h1> index </h1>`
})

//add router middleware
app.use(router.routes())

app.listen(3333)