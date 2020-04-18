import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ReactViewsController {
  public async show ({ view }: HttpContextContract) {
    return view.render('main')
  }
}
