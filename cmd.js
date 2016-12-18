#!/usr/bin/env Node
let website = process.argv[2]

require('http').request(website, function(site) {
  site.pipe(process.stdout)
}).end()