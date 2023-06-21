import { schema, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class StorePostImgValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    user_id: schema.number(),
    description: schema.string.optional(),
    file: schema.file({
      size: "10mb",
      extnames: ["jpg", "gif", "png"],
    }),
    size: schema.string(),
    type_post: schema.number(),
  });

  public messages: CustomMessages = {
    "file.extname":
      "The file must have one of {{ options.extnames }} extension names",
    "file.size": "The file size must be under {{ options.size }}",
  };
}
