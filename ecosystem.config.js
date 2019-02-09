module.exports = {
  apps: [
    {
      name: 'pm2-nuxt-app',
      script: './node_modules/.bin/nuxt-ts',
      args: 'start',
      instances: 2,
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 5000,
      env_production: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 9000
      }
    }
  ]
}
