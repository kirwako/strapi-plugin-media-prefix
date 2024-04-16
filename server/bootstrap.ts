import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {

  const plugin = strapi.plugin("media-prefix").service("mediaService");

  strapi.db?.lifecycles.subscribe({
    afterFindOne(event) {
      event = plugin.addMediaPrefix(event);
    },
    afterFindMany(event) {
      event = plugin.addMediaPrefix(event);
    },
  });
};
