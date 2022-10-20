import { Response, Server } from 'miragejs';

/**
 * Register login routes with the MirageJS server
 *
 * @param server MirageJS mock server
 * @param baseApiUrl Base URL of the API
 */
export function registerLoginRoutes(
  server: Server,
  baseApiUrl: string,
): void {
  server.post(`${baseApiUrl}/login`, () => {
    server.create('trip');

    return new Response(200);
  });

}
