import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FilmsList from '@/pages/FilmsList'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('pages/FilmsList', () => {
  let store
  let actions
  let getters
  let wrapper

  beforeAll(() => {
    getters = {
      getSortedFilms: () => [
        {
          title: 'The Force Awakens',
          release_date: '1977-05-25',
          director: 'George Lucas',
          opening_crawl: 'It is a period of civil war.',
        }
      ]
    }

    actions = {
      fetchFilms: jest.fn(),
    }

    store = new Vuex.Store({
      modules: {
        films: {
          namespaced: true,
          actions,
          getters,
        },
      },
    })

    wrapper = shallowMount(FilmsList, {
      store,
      localVue,
    })
  })

  it('It should fetch items.', () => {
    expect(actions.fetchFilms).toHaveBeenCalled()
  })

  it('It should list one movie', () => {
    expect(wrapper.findAll('li').length)
      .toBe(1)
  })
})
