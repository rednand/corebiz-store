export async function getEmail(
  ctx: OrderPlacedContext,
  next: () => Promise<any>
) {

  const orderId = ctx.body.orderId

  const orderBody =  await ctx.clients.oms.order(orderId)

  const id = orderBody.clientProfileData.userProfileId

  const email = (await ctx.clients.clientOrder.getClientId(id))

  ctx.state.email = email 

  console.info(`Email CLiente: ${ctx.state.email}`)
  await next()
}