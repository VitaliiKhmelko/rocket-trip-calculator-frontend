import { Model, Server } from "miragejs";
import { environment } from "src/environments/environment";
import { registerLoginRoutes } from "./register-login-routes.function";
import { registerTripRoutes } from "./register-trip-routes.function";
import { tripFactory } from "./trip.factory";

export function makeMirageJsServer() {
  return new Server({
    models: {
      trip: Model,
    },

    factories: {
      trip: tripFactory
    },

    seeds(server: Server): void {
      server.create('trip');
    },

    routes(): void {
      const baseApiUrl = environment.apiUrl;

      registerTripRoutes(this, baseApiUrl);
      registerLoginRoutes(this, baseApiUrl);
    }
  });
}
