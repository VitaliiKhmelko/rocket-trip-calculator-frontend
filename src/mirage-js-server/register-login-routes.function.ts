import { HttpResponse } from '@angular/common/http';
import { Server } from 'miragejs';
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
    const { name } = JSON.parse(request.requestBody);
    const tripUuid = 'trip-uuid';
    schema.create('trip', tripFactory(name, tripUuid) as any);

    return new HttpResponse({ body: { name: 'user', tripUuid } })
  });

}
