if (process.env.REDISTOGO_URL) {
  const rtg = require("url").parse(process.env.REDISTOGO_URL);
  const redis = require("redis")
  const client = redis.createClient(rtg.port, rtg.hostname);
  redis.auth(rtg.auth.split(":")[1]);
} else {
  const redis = require('redis');
  const client = redis.createClient();
}

client.on('error', err => {
  console.error(err);
});

client.on('connect', msg => {
  console.log('REDIS LIVE');
});

module.exports = client;
