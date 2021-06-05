const dotenv = require('dotenv');
dotenv.config();
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '39c8165f171f837b10309760fe573914'),
    },
  },
});
