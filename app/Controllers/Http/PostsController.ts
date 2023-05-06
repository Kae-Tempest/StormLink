import type {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import {existsSync, mkdirSync, readdirSync} from "fs";
import Application from "@ioc:Adonis/Core/Application";
import Post from "App/Models/Post";
import Types from "App/Enums/Types";
import Database from "@ioc:Adonis/Lucid/Database";

export default class PostsController {
  public async index({}: HttpContextContract) {
    return Database
        .query().from('posts')
        .select('*');
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const post = new Post();
    const postInfo = request.body();

    post.size = postInfo.size;
    post.description = postInfo.desc;
    post.like = 0;
    post.user_id = postInfo.userId;
    if (!request.file) {
      post.type_post = Types.TEXT;
      post.path = null;
      await post.save();
    }
    if (request.file) {
      post.type_post = Types.IMAGE;
      const postFile = request.file("file", {
        size: "5mb",
        extnames: ["jpg", "png", "gif"],
      });
      if (!postFile) return;
      if (!postFile.isValid) return postInfo.errors;

      const date = new Date();
      const year = date.getFullYear();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const dir = `resources/assets/post/${year}/${month}/${day}`;
      post.path = dir;

      if (!existsSync(dir)) {
        await mkdirSync(dir, { recursive: true });
        const files = readdirSync(`${dir}`);
        await postFile.move(Application.makePath(dir), {
          name: `${files.length + 1}.${postFile.extname}`,
        });
      } else {
        const files = readdirSync(dir);
        await postFile.move(Application.makePath(dir), {
          name: `${files.length + 1}.${postFile.extname}`,
        });
      }
    }

    await post.save();

    return response;
  }

  public async show({}: HttpContextContract) {

  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
