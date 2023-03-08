import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({}: HttpContextContract) {
    // return all users
  }

  public async create({}: HttpContextContract) {
    // return view for creating a user
  }

  public async store({}: HttpContextContract) {
    // create a user
  }

  public async show({}: HttpContextContract) {
    // return one user
  }

  public async edit({}: HttpContextContract) {
    // return view for editing a user
  }

  public async update({}: HttpContextContract) {
    // update one user
  }

  public async destroy({}: HttpContextContract) {
    // delete one user
  }
}
