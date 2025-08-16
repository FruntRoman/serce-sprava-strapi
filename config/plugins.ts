export default ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary',
      providerOptions: {
        cloud_name: env('du9mlvwvw'),
        api_key: env('239631828948374'),
        api_secret: env('fwJReZERLg9YwpwIEl7h98Tip6c'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
