'use strict';
const Influx = require('influx');

module.exports = app => {

  const config = app.config.influx || {};

  app.Influx = Influx;

  app.influx = new Influx.InfluxDB(config);

};
