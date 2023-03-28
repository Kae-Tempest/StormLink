import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {existsSync, mkdirSync, readdirSync} from "fs";
import Application from "@ioc:Adonis/Core/Application";
export default class PostsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    const postInfo = request.body()
    const postFile = request.file('file', {
      size: '5mb',
      extnames: ['jpg','png','gif']
    })
    if (!postFile) return
    if (!postFile.isValid) return postInfo.errors

    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const dir = `resources/assets/post/${year}/${month}/${day}`

    if (!existsSync(dir)) {
      await mkdirSync(dir, { recursive: true});
      const files = readdirSync(`${dir}`)
      await postFile.move(Application.makePath(dir), {
        name: `${files.length + 1}.${postFile.extname}`,
      })
    } else {
      const files = readdirSync(dir)
      await postFile.move(Application.makePath(dir), {
        name: `${files.length + 1}.${postFile.extname}`,
      })
    }

    return response
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
