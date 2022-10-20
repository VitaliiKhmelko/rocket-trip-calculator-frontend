import { Model, Server } from "miragejs";
import { environment } from "src/environments/environment";
import { registerLoginRoutes } from "./register-login-routes.function";
import { registerTripRoutes } from "./register-trip-routes.function";

export function makeMirageJsServer() {
  return new Server({
    models: {
      trip: Model,
    },

    routes(): void {
      const baseApiUrl = environment.apiUrl;

      registerTripRoutes(this, baseApiUrl);
      registerLoginRoutes(this, baseApiUrl);
    }
  });
}
