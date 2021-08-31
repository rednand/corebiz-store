export async function allStates(
    ctx: StatusChangeContext,
    next: () => Promise<any>
  ) {
    console.log(ctx.body.orderId)
    await next()
}
