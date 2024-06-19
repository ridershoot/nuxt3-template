export default defineEventHandler((e) => {
  const secret = process.env.NUXT_API_SECRET;
  return {
    text: secret,
  };
});
