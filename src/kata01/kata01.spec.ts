import { KataOne } from './kata01'

describe('kata 01', () => {
  it('should calculate the value for bundle itens in the N for X dollar model', () => {
    expect(KataOne.calculateBundleValue(8, 'banana')).toBe(280)
    expect(KataOne.calculateBundleValue(9, 'banana')).toBe(300)
    expect(KataOne.calculateBundleValue(10, 'apple')).toBe(400)
    expect(KataOne.calculateBundleValue(12, 'apple')).toBe(420)
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

  it('buy two, get one free (so does the third item have a price?)', () => {
    expect(KataOne.buyTwoGetOneFree(2, 10)).toBe(20)
    expect(KataOne.buyTwoGetOneFree(3, 10)).toBe(20)
    expect(KataOne.buyTwoGetOneFree(4, 10)).toBe(30)
    expect(KataOne.buyTwoGetOneFree(5, 10)).toBe(40)
    expect(KataOne.buyTwoGetOneFree(6, 10)).toBe(40)
  })
})
