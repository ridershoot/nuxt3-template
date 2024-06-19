module.exports = {
  apps: [
    {
      name: "nuxt3-template",
      port: "3000",
      exec_mode: "cluster",
      // 实例数量
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
