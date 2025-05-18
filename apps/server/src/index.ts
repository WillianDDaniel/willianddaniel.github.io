import { server } from './server';

(async () => {
  const app = await server();
  await app.listen({ port: 3333, host: '0.0.0.0' });
})();
