const Redis = require("ioredis");

module.exports = {
  setRedis: (dataToStore) => {
    const redis = new Redis();
    redis.set("contactUs", JSON.stringify(dataToStore));
    return redis;
  },
  getRedis: (redis) => {
    const res = redis.get("contactUs");
     redis.del("contactUs");
    return res;
  }
}
