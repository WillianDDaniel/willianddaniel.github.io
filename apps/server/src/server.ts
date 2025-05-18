import fastify from 'fastify';
import cors from '@fastify/cors';

import { router } from './routes/router';

export async function server() {
  const server = fastify({ logger: true });

  await server.register(router);
  await server.register(cors, { origin: '*' });

  return server;
}
