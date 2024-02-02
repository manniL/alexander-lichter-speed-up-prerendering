export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    name: `John Doe ${id}`,
  }
})