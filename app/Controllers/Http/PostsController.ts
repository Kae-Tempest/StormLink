import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from "@ioc:Adonis/Core/Application";
import * as fs from "fs";

export default class PostsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    // console.log({
    //   body: request.body(),
    //   file: request.file('file',{
    //     size: '5mb',
    //     extnames: ['jpg','png','gif']
    //   })
    // })
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
    // get folder content length
    const dir = `./resources/assets/post/${year}/${month}/${day}`
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const files = fs.readdirSync(`resources/assets/post/${year}/${month}/${day}`)
    await postFile.move(Application.makePath(`resources/assets/post/${year}/${month}/${day}`), {
      name: `${files.length + 1}.${postFile.extname}`,
    })

    return response
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
