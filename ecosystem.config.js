module.exports = {
    apps : [{
      name: 'monnom-strapi',
      script    : "server.js",
      instances : "max",
      exec_mode : "cluster"
    }]
  }
  