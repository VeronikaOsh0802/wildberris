import {Product} from '~/models/products.model'


const getNewProduct = (products: Product[]) => {
  return products.filter((c) => c.label.toLowerCase() === 'new')
          .splice(0, 4)
}



export default defineEventHandler(async(event) => {
 
  const products: Product[] = await $fetch('https://project111se-default-rtdb.asia-southeast1.firebasedatabase.app/db.json')

  return getNewProduct (products)
})