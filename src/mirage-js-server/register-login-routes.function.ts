import { Response, Server } from 'miragejs';
import { tripFactory } from './trip.factory';

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
  // Generate mock trip with user logged in
  server.post(`${baseApiUrl}/login`, (schema, request) => {
    const { user } = JSON.parse(request.requestBody);
    schema.create('trip', tripFactory(user) as any);

    return new Response(200);
  });

}
