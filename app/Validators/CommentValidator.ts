import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CommentValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    content: schema.string({}, [rules.maxLength(250)]),
    post_id: schema.number(),
    user_id: schema.number(),
    like: schema.number(),
  });
  public messages: CustomMessages = {
    "content.maxLength": "Too long content",
  };
}
