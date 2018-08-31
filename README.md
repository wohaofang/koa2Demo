# koa2Demo
node




### index.js
    基础设置

### routerDemo.js
    路由设置
## Koa 是一个新的 web 框架

##### koa middleware 中间件

让我们再仔细看看koa的执行逻辑。核心代码是：
```
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

```

每收到一个http请求，koa就会调用通过app.use()注册的async函数，并传入ctx和next参数

koa把很多async函数组成了一个处理链，每一个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。我们把每个async函数称为middeware，这些middleware可以组合一起，完成很多有用的功能。



### koa-router

*注意导入koa-router的语句最后的()是调用函数
```
const router = require('koa-router')();
```
相当于
```
const fn_router = require('koa-router');
const router = fn_router();
```