import { Event } from '@strapi/database/dist/lifecycles';

let MEDIA_PREFIX = 'http://localhost:1337';

if (process.env.MEDIA_PREFIX) {
	MEDIA_PREFIX = process.env.MEDIA_PREFIX;
} else {
	MEDIA_PREFIX = strapi.config.get('server.url', 'http://localhost:1337');
}

MEDIA_PREFIX += '/uploads/';

export const replaceUploadsWithMediaPrefix = (obj: Event) => {
	if (Array.isArray(obj)) {
		for (let i = 0; i < obj.length; i++) {
			obj[i] = replaceUploadsWithMediaPrefix(obj[i]);
		}
	} else if (typeof obj === 'object' && obj !== null) {
		for (let key in obj) {
			if (
				typeof obj[key] === 'string' &&
				obj[key].startsWith('/uploads') &&
				key === 'url'
			) {
				obj[key] = obj[key].replace(/\/uploads\//g, MEDIA_PREFIX);
			} else {
				obj[key] = replaceUploadsWithMediaPrefix(obj[key]);
			}
		}
	}
	return obj;
};
