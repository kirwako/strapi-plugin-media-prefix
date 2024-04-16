"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceUploadsWithMediaPrefix = void 0;
const MEDIA_PREFIX = strapi.config.get("server.url", "http://localhost:1337") + "/uploads/";
const replaceUploadsWithMediaPrefix = (obj) => {
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            obj[i] = (0, exports.replaceUploadsWithMediaPrefix)(obj[i]);
        }
    }
    else if (typeof obj === "object" && obj !== null) {
        for (let key in obj) {
            if (typeof obj[key] === "string" &&
                obj[key].startsWith("/uploads") &&
                key === "url") {
                obj[key] = obj[key].replace(/\/uploads\//g, MEDIA_PREFIX);
            }
            else {
                obj[key] = (0, exports.replaceUploadsWithMediaPrefix)(obj[key]);
            }
        }
    }
    return obj;
};
exports.replaceUploadsWithMediaPrefix = replaceUploadsWithMediaPrefix;
