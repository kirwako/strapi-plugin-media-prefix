"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    var _a;
    const plugin = strapi.plugin("media-prefix").service("mediaService");
    (_a = strapi.db) === null || _a === void 0 ? void 0 : _a.lifecycles.subscribe({
        afterFindOne(event) {
            event.result = plugin.addMediaPrefix(event.result);
        },
        afterFindMany(event) {
            event.result = plugin.addMediaPrefix(event.result);
        },
    });
};
