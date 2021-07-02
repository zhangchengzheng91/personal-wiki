module.exports = {
  apps : [{
    name: "personal-wiki",
    script: "npm run dev",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }, {
    name: 'worker',
    script: 'worker.js'
  }]
}
