// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WelcomeController {
  public async index () {
    return {
      Adonis: 'says hi!',
    }
  }
}
