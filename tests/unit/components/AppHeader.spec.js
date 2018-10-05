import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader'

describe('components/AppHeader', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(AppHeader)
  })

  it('Img should exist', () => {
    expect(wrapper.contains('img'))
      .toBe(true)
  })

  it('Img should have alt', () => {
    expect(wrapper.find('img').attributes('alt'))
      .toBe('Star Wars logo')
  })
})
