import Redis, { type RedisOptions } from "ioredis";

let redis: Redis | null = null;


export function getRedisClient(): Redis {
  if (!redis) {
    const opts: RedisOptions = {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    };

    try {
      const url = process.env.REDIS_URL || "";
      const parsed = new URL(url);
      const useTls = parsed.protocol === "rediss:" || parsed.protocol === "tls:";

      opts.host = parsed.hostname;
      opts.port = parsed.port ? Number(parsed.port) : 6379;
      if (parsed.username) opts.username = decodeURIComponent(parsed.username);
      if (parsed.password) opts.password = decodeURIComponent(parsed.password);

      if (useTls) {
        opts.tls = { servername: parsed.hostname };
        console.info(`Redis: enabling TLS SNI servername=${parsed.hostname}`);
      }
    } catch {
      // ignore URL parse errors and proceed with raw URL
    }

    redis = new Redis(opts);

    redis.on("connect", () => {
      console.info("✅ Redis connected");
    });

    redis.on("error", (err) => {
      console.error("❌ Redis error:", err);
    });
  }

  return redis;
}
