describe('kata 01', () => {
  it('should calculate the value for bundle itens in the N for X dollar model', () => {
    function getProductPromo(productId: string) {
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

    function calculateBundleValue(amount: number, productId: string): number {
      const { bundleValue, individualValue, breakAmount } = getProductPromo(productId)

      const rest = amount % breakAmount
      const bundles = Math.floor(amount / breakAmount)

      const total = (bundles * bundleValue) + (rest * individualValue)
      return total
    }

    expect(calculateBundleValue(8, 'banana')).toBe(280)
    expect(calculateBundleValue(9, 'banana')).toBe(300)
    expect(calculateBundleValue(10, 'apple')).toBe(400)
    expect(calculateBundleValue(12, 'apple')).toBe(420)
  })

  it('should calculate pound to ounces convertions: $1.99/pound (so what does 4 ounces cost?)', () => {
    function convertPoundToOunces(poundValue: number): number {
      return poundValue / 16
    }

    expect(convertPoundToOunces(1.99)).toBe(0.124375)
  })

  it('should calculate pound to ounces convertions: should it round the final amount?', () => {
    function convertPoundToOunces(poundValue: number): number {
      return +(poundValue / 16).toFixed(2)
    }

    expect(convertPoundToOunces(1.99)).toBe(0.12)
    expect(convertPoundToOunces(2.01)).toBe(0.13)
  })
})
