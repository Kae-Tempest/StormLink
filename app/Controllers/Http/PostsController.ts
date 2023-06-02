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
    console.log(postInfo)
    const postFile = request.file("file", {
      size: "5mb",
      extnames: ["jpg", "jpeg", "png", "gif"],
    });
    console.log(post,'post')
    console.log(postFile, 'postFile')
    post.size = postInfo.size;
    post.description = postInfo.desc;
    post.like = 0;
    post.user_id = postInfo.userId;
    if (postFile === null) {
      post.type_post = Types.TEXT;
      post.path = '';
    }
    if (postFile) {
      post.type_post = Types.IMAGE;

      if (!postFile) return;
      if (!postFile.isValid) return postInfo.errors;

      const date = new Date();
      const year = date.getFullYear();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const dir = `public/assets/post/${year}/${month}/${day}`;

      if (!existsSync(dir)) {
        await mkdirSync(dir, { recursive: true });
        const files = readdirSync(`${dir}`);
        await postFile.move(Application.makePath(dir), {
          name: `${files.length + 1}.${postFile.extname}`,
        });
        post.path = `assets/post/${year}/${month}/${day}/${files.length + 1}.${postFile.extname}`;
      } else {
        const files = readdirSync(dir);
        await postFile.move(Application.makePath(dir), {
          name: `${files.length + 1}.${postFile.extname}`,
        });
        post.path = `assets/post/${year}/${month}/${day}/${files.length + 1}.${postFile.extname}`;
      }
    }

    await post.save();

    return response.status(200);
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
