if (process.env.REDIS_URL) {
  const client = require('redis').createClient(process.env.REDIS_URL);
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
