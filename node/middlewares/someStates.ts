export async function someStates(ctx: StatusChangeContext, next: () => Promise<any>) {
      
    console.log(`${ctx.body.currentState} : ${ctx.body.orderId}`)

    await next()
}  