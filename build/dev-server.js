require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

var bodyParser = require('body-parser')

// 连接mongodb
var mongoose = require('mongoose');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost/medadm');

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(session({
  secret: 'medadm',
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  })
}));

// 引入用模型
var User = require('../database/models/user.js')

var appData = require('../data')
var user = appData.user
var medicine = appData.medicine

var apiRoutes = express.Router()

apiRoutes.get('/medicine', function (req, res) {
  res.json({
    errno: 0,
    medicine: medicine
  })
})

// 用户注册
apiRoutes.post('/signin', function (req, res) {
  var data = req.body;
  var avatarArr = [
    'http://wx1.sinaimg.cn/thumb300/61e44b02ly1feupvt27b2j21cg1pcx6p.jpg',
    'http://wx2.sinaimg.cn/thumb300/61e44b02ly1fetb867tavj22c0340e81.jpg',
    'http://wx3.sinaimg.cn/thumb300/61e44b02ly1fcmrse4ei7j219c1w0b2a.jpg',
    'http://ww3.sinaimg.cn/thumb300/61e44b02jw1farbb25co3j215o1jlhdu.jpg',
    'http://ww4.sinaimg.cn/thumb300/61e44b02jw1f9kjptc84nj21ww1wwb29.jpg'
  ];
  var avatar = (function (avatarArr) {
    return avatarArr[Math.round(Math.random() * 4)];
  })(avatarArr);
  User.findOne({
    tel: data.tel
  }, function (err, u) {
    if (u) {
      res.json({
        errno: 1,
        errmsg: '该手机已注册，请直接登陆'
      })
    } else {
      var newUser = new User({
        name: data.name,
        tel: data.tel,
        pwd: data.pwd,
        avatar: avatar
      });
      newUser.save(function (err) {
        if (err) {
          console.log(err);
        }
        User.findOne({
          tel: data.tel
        }, function (err, u) {
          if (err) {
            console.log(err);
          }
          res.json({
            errno: 0,
            user: u
          })
        })
      })
    }
  })
})

apiRoutes.post('/signup', function (req, res) {
  var data = req.body;
  User.findOne({
    tel: data.tel
  }, function (err, u) {
    if (err) {
      console.log(err);
    }
    if (!u) {
      return res.json({
        errno: 1,
        errmsg: '用户不存在'
      });
    }
    if (u.pwd !== data.pwd) {
      return res.json({
        errno: 1,
        errmsg: '用户名或密码错误！'
      });
    } else {
      return res.json({
        errno: 0,
        user: u
      })
    }
  })
})

app.use('/api', apiRoutes)

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
