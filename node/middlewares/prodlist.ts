export async function prodlist(ctx: Context, next: () => Promise<any>) {
    const {
      clients: { catalog },
    } = ctx
  
    console.info('Product List:', catalog)
  // existe uma funcao getproductsandskus. Usar ela para listar todos os itens num json
    // const sku = await catalog.getSkuById('' + code)

    const prodlist = await catalog.getProductsAndSkus();


  
    ctx.body = prodlist
    // ctx.body = list

    await next()
}

console.log(prodlist);
  