import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import StorePostImgValidator from "App/Validators/StorePostImgValidator";
import StorePostTextValidator from "App/Validators/StorePostTextValidator";
import { Attachment } from "@ioc:Adonis/Addons/AttachmentLite";
import Post from "App/Models/Post";

export default class PostsController {
  public async index({}: HttpContextContract) {
    return Post.all();
  }

  public async create({}: HttpContextContract) {}

  public async storeimg({ request, response }: HttpContextContract) {
    const payload = await request.validate(StorePostImgValidator);
    const post = await Post.create({
      ...payload,
      file: Attachment.fromFile(payload.file),
    });
    return response.created(post);
  }

  public async storetxt({ request, response }: HttpContextContract) {
    const payload = await request.validate(StorePostTextValidator);
    const post = await Post.create(payload);
    console.log(response.created(post));
    return response.created(post);
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
