import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => {

  const plugin = strapi.plugin("media-prefix").service("mediaService");

  strapi.db?.lifecycles.subscribe({
    afterFindOne(event: any) {
      event.result = plugin.addMediaPrefix(event.result);
    },
    afterFindMany(event: any) {
      event.result = plugin.addMediaPrefix(event.result);
    },
  });
};
