#!/usr/bin/env node
'use strict';

console.log(process.env.NODE_ENV)

// Start Strapi
const strapi = require('strapi');
strapi().start();