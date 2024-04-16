"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    var _a;
    const plugin = strapi.plugin("media-prefix").service("mediaService");
    console.log(plugin);
    (_a = strapi.db) === null || _a === void 0 ? void 0 : _a.lifecycles.subscribe({
        afterFindOne(event) {
            event = plugin.addMediaPrefix(event);
        },
        afterFindMany(event) {
            event = plugin.addMediaPrefix(event);
        },
    });
};
