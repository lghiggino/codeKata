export class KataOne {
  //Should go to a repository and pick up product by id
  public static getProductPromo(productId: string) {
    if (productId === 'banana') {
      return {
        bundleValue: 100,
        individualValue: 40,
        breakAmount: 3,
      }
    }
    if (productId === 'apple') {
      return {
        bundleValue: 140,
        individualValue: 60,
        breakAmount: 4,
      }
    }
  }

  public static calculateBundleValue(amount: number, productId: string): number {
    const { bundleValue, individualValue, breakAmount } = KataOne.getProductPromo(productId)

    const rest = amount % breakAmount
    const bundles = Math.floor(amount / breakAmount)

    const total = bundles * bundleValue + rest * individualValue
    return total
  }

  public static buyTwoGetOneFree(amount: number, price: number): number {
    const rest = amount % 3
    const bundles = Math.floor(amount / 3)

    return bundles * 2 * price + rest * price
  }
}
