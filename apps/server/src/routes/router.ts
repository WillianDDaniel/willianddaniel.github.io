import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export async function router(app: FastifyInstance) {
  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.redirect('https://willianddaniel.github.io', 301);
  });
}

export default router;
