import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";
import {
  StorePostImgValidator,
  StorePostTextValidator,
} from "App/Validators/StorePostImgValidator";
import { Attachment } from "@ioc:Adonis/Addons/AttachmentLite";

export default class PostsController {
  public async index({}: HttpContextContract) {
    return Post.all();
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    console.log(request.body());
    if (typeof request.body().type_post === "string")
      request.body().type_post = parseInt(request.body().type_post);
    if (typeof request.body().user_id === "string")
      request.body().user_id = parseInt(request.body().user_id);

    switch (request.body().type_post) {
      case 1:
        const payloadTxt = await request.validate(StorePostTextValidator);
        const postT = await Post.create(payloadTxt);
        return response.created(postT);
      case 2:
        const payloadImg = await request.validate(StorePostImgValidator);
        const postI = await Post.create({
          ...payloadImg,
          file: Attachment.fromFile(payloadImg.file),
        });
        return response.created(postI);
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
