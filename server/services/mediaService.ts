import type { Core } from '@strapi/strapi';
import { Event } from "@strapi/database/dist/lifecycles";
import { replaceUploadsWithMediaPrefix } from "../utils/replacer";

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  addMediaPrefix(obj: Event) {
    return replaceUploadsWithMediaPrefix(obj);
  },
});
