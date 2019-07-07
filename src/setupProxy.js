const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { 
    target: "https://m.iqianjin.com/api/" ,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/api": "/"
    },
 }));
  app.use(proxy("/borrowerInfo", { 
    target: "https://m.iqianjin.com/borrowerInfo/" ,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/borrowerInfo": "/"
    },
 }));
 app.use(proxy("/question", { 
  target: "https://m.iqianjin.com/question/" ,
  secure: false,
  changeOrigin: true,
  pathRewrite: {
   "^/question": "/"
  },
}));
   
}
