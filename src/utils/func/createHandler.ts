import createModule from "@site/.JS/main"
export async function createHandler(method: string) {
   const handler = (await createModule()).instance.exports[method]
   return handler
}