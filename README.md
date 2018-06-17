# egg-influx

基于 [node-influx](https://github.com/node-influx/node-influx) 封装的influx的egg插件，用于操作InfluxDB数据库。

## 安装

```bash
$ npm i egg-influx --save
```

## 配置

```js
// {app_root}/config/plugin.js
exports.influx = {
  enable: true,
  package: 'egg-influx',
};

// {app_root}/config/config.{env}.js
config.influx = {
  host: '127.0.0.1',
  port: 8086,
  database: '<database name>',
  username: '<username>',
  password: '<password>',
}
```

## 使用方法

```js
const Service = require('egg').Service;

class SystemService extends Service {

  async get(params) {
    const { influx, Influx } = this.app;
    try {
      const data = await influx.query(query);
      return data;
    } catch (e) {
      ctx.throw(500, e.message);
    }
  }
}

module.exports = SystemService;

```
更多用法，参考 [node-influx的文档](https://node-influx.github.io/class/src/index.js~InfluxDB.html)