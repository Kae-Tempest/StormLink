import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Comment from "App/Models/Comment";
import CommentValidator from "App/Validators/CommentValidator";

export default class CommentsController {
  public async index({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CommentValidator);
    await Comment.create(payload);
    return response.redirect().back();
  }

  public async show({ request }: HttpContextContract) {
    const id = request.params().id;
    return Comment.query()
      .where("post_id", "=", id)
      .orderBy("created_at", "asc");
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
