const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target;
  if (req.url.startsWith("/imgProxy")) {
    // 将包含 /imgProxy 的请求转发到 http://img.zhufengpeixun.cn
    target = "http://img.zhufengpeixun.cn";
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      /**
        /imgProxy/aaa.png  ==>  http://img.zhufengpeixun.cn/aaa.png
       */
      "^/imgProxy": "/",
    },
  })(req, res);
};