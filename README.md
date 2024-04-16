# Strapi Media Prefix Plugin

Prepend media urls (images, files, audios, ) with your public url/media prefix on both Admin Panel and API's

![Prepend media url Screenshot](https://github.com/kirwako/strapi-plugin-media-prefix/blob/main/screenshots/screenshot-1.jpg)

# ⚙️ Installation

```bash
npm install strapi-plugin-media-prefix

# or

yarn add strapi-plugin-media-prefix
```

# ✒️ Configuration

Enable the plugin by adding the following lines of code in the file: `./config/plugins.ts`

```ts

export default () => ({
  "media-prefix": {
    enabled: true,
  },
});

```

or in the file: `./config/plugins.js`

```js
module.exports = {
	'media-prefix': {
		enabled: true,
	},
};
```

# 🌐 Server Config

The plugin get the public url/media prefix from the server config file: `./config/server.ts`
so be sure to add url key in the server config file

in the file: `./config/server.ts`
```ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'http://localhost:1337'), // be sure to add this line
});

```

or in the file: `./config/server.js`

```js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
	keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'http://localhost:1337'), // be sure to add this line
});
```

# Support
#### This package costs me time to make and maintain every time.
[I am very 😀 about every coffee!]

<a href="https://www.buymeacoffee.com/imranbaali" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>
