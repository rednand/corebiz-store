//import { UserInputError } from '@vtex/api'

export async function getUsersById(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  console.info('Received params:', params)

  // const { id } = params

  // if (!id) {
  //   throw new UserInputError('Id is required') // Wrapper for a Bad Request (400) HTTP Error. Check others in https://github.com/vtex/node-vtex-api/blob/fd6139349de4e68825b1074f1959dd8d0c8f4d5b/src/errors/index.ts
  // }

  const res = await ctx.clients.users.getStatus(`/users`)

  ctx.body = res

  await next()
}
