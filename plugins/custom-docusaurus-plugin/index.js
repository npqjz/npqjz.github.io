export default function (context, options) {
   return {
      name: 'custom-docusaurus-plugin',
      configureWebpack(config, isServer, utils) {
         const { getJSLoader } = utils;
         console.log(config.name);

         return {
            module: {
               rules: [
                  {
                     test: /\.wasm$/,
                     use: [getJSLoader(isServer), 'wasm-loader'],
                  },
               ],
            },
         };
      },
      injectHtmlTags({ content }) {
         return {
            headTags: [
               {
                  tagName: 'link',
                  attributes: {
                     rel: 'preconnect',
                     href: 'https://www.github.com',
                  },
               },
               // ...content.remoteHeadTags,
            ],
            preBodyTags: [
               {
                  tagName: 'script',
                  attributes: {
                     charset: 'utf-8',
                     src: 'anim/pointer_effect.js',
                     async: true,
                  },
               },
               {
                  tagName: 'script',
                  attributes: {
                     charset: 'utf-8',
                     src: 'anim/screen_effect.js',
                     async: true,
                  },
               }
            ],
            // postBodyTags: [`<div> This is post body </div>`],
         };
      },
   };
}