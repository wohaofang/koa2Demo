const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const Router = require('koa-router')


//子路由1
let home = new Router()
home.get('/',async (ctx)=>{
    let html = `
    <ul>
      <li><a href="/page/hello">/page/hello</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

//子路由2
let page = new Router()
page.get('/404', async(ctx)=>{
    console.log(ctx)
    ctx.body = '404 page!'
})
.get('/hello', async(ctx)=>{
    ctx.body = ' hello world page!'
})

//装在所有子路由
let router = new Router()
router.use('/',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3080,()=>{
    console.log(1111)
})