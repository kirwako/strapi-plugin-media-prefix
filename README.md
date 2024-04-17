<p align="center">
  <img src="https://github.com/kirwako/strapi-plugin-media-prefix/blob/main/screenshots/logo.svg" alt="strapi media prefix plugin Logo">
</p>

# Strapi Media Prefix Plugin
Prepend media urls (images, files, audios, ) with your public url/media prefix on both Admin Panel and API's

![Prepend media url Screenshot](https://github.com/kirwako/strapi-plugin-media-prefix/blob/main/screenshots/screenshot-1.jpg)

# ⚙️ Installation

```bash
npm install strapi-plugin-media-prefix
# or
yarn add strapi-plugin-media-prefix
```

# ✒️ Plugin Configuration

Enable the plugin by adding the following lines of code in the file: `./config/plugins.ts`

```ts
// ./config/plugins.ts
export default () => ({
  "media-prefix": {
    enabled: true,
  },
});

```

or in the file: `./config/plugins.js`

```js
// ./config/plugins.js
module.exports = {
  'media-prefix': {
    enabled: true,
  },
};
```

# 🌐 Environment Configuration

The plugin can get the public url/media prefix from the `.env` file or from the server config file: `./config/server.ts` if you don't define the `MEDIA_PREFIX` key in the `.env` file

# 🔧 Using .env file for environment configuration
The plugin get the public url/media prefix from `.env` file using the key `MEDIA_PREFIX`

so be sure to add `MEDIA_PREFIX` key in the `.env` file

```bash
#.env
MEDIA_PREFIX=https://kirwako.com/media
```

# 🚀 Using ./config/server.ts file for environment configuration

The plugin can also get the public url/media prefix from the server config file: `./config/server.ts` if you don't define the `MEDIA_PREFIX` key in the `.env` file

so be sure to add url key in the server config file

in the file: `./config/server.ts`
```ts
// ./config/server.ts
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
// ./config/server.js
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
### I am very Happy 😀 about every coffee!

<a href="https://bit.ly/media-prefix-strapi-plugin" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>
