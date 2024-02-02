export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    title: 'My Amazing Nuxt.js Application',
  }
})