import { createClient, print } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();

    this.client.on('error', (err) => {
      console.log('Redis client not connected to the server:', err.toString());
    });
  }

  isAlive() {
    this.client.on('connect', () => true);
  }

  async get(key) {
    this.client.get(key, (_err, reply) => {
      console.log(reply.toString());
    });
  }

  async set(key, duration) {
    this.client.set(key, duration, print);
  }

  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;
