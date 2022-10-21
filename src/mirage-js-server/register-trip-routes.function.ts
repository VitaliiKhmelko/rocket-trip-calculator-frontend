import { Response, Server } from 'miragejs';
import { tripFactory } from './trip.factory';

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
    if (schema.all('trip').length === 0) {
      schema.create('trip', tripFactory('Your name', 'tripUuid') as any);
    }
    return new Response(200, undefined, schema.first('trip')?.attrs);
  });

}
