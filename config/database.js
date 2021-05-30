module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'monnom'),
        username: env('DATABASE_USERNAME', 'monnom'),
        password: env('DATABASE_PASSWORD', 'admin'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

// sqlite fallback
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.sqlite3'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

