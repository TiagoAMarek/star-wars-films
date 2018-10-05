import { shallowMount } from '@vue/test-utils'
import Film from '@/components/Film'

describe('pages/Film', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(Film, {
      propsData: {
        film: {
          title: 'A New Hope',
          release_date: '1977-05-25',
          director: 'George Lucas',
          opening_crawl: 'It is a period of civil war.',
        },
      },
    })
  })

  it('Title should match', () => {
    const title = wrapper.find('.film__title')
    expect(title.text()).toEqual('A New Hope')
  })

  it('Release date should match', () => {
    const title = wrapper.find('.film__release-date')
    expect(title.text()).toEqual('5/25/1977')
  })

  it('Director should match', () => {
    const title = wrapper.find('.film__director')
    expect(title.text()).toEqual('Director: George Lucas')
  })

  it('Opening crawl should match', () => {
    const title = wrapper.find('.film__opening-crawl')
    expect(title.text()).toEqual('It is a period of civil war.')
  })
})
