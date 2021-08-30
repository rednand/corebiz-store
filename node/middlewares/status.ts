export async function status(ctx: Context, next: () => Promise<any>) {
    const {
       state: { code },
      clients: { catalog },
    } = ctx
  
    console.info('Received code:', code)
  // existe uma funcao getproductsandskus. Usar ela para listar todos os itens num json
    const sku = await catalog.getSkuById('' + code)

    // const list = await catalog.getProductsAndSkus();
  
    ctx.body = sku
    // ctx.body = list
  
    await next()
}
  