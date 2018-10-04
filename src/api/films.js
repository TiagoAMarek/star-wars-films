import handler from './handler'

export default {

  async getFilms() {
    let response = {}

    try {
      response = await handler.get('films/')
    } catch (error) {
      throw new Error(error)
    }

    return response
  }
}
