import { schema, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export class StorePostImgValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    user_id: schema.number(),
    size: schema.string(),
    description: schema.string(),
    file: schema.file(),
    type_post: schema.number(),
  });

  public messages: CustomMessages = {};
}

export class StorePostTextValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    user_id: schema.number(),
    size: schema.string(),
    description: schema.string(),
    type_post: schema.number(),
  });

  public messages: CustomMessages = {};
}
