import { Response, Server } from 'miragejs';

/**
 * Register trip routes with the MirageJS server
 *
 * @param server MirageJS mock server
 * @param baseApiUrl Base URL of the API
 */
export function registerTripRoutes(
  server: Server,
  baseApiUrl: string,
): void {
  server.get(`${baseApiUrl}/trip`, (schema) => {
    return new Response(200, undefined, schema.first('trip')?.attrs);
  });

}
