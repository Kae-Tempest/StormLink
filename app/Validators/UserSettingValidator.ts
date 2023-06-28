import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UserSettingValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    avatar: schema.file.optional({
      size: "10mb",
      extnames: ["jpg", "gif", "png"],
    }),
    username: schema.string.optional({}, [rules.maxLength(12)]),
    bio: schema.string.optional({}, [rules.maxLength(240)]),
    old_pass: schema.string.optional({}, [rules.minLength(8)]),
    new_pass: schema.string.optional({}, [rules.minLength(8)]),
    confirm_new_pass: schema.string.optional({}, [rules.minLength(8)]),
  });
  public messages: CustomMessages = {
    "avatar.size": "The file size must be under {{ options.size }}",
    "avatar.extname": "The file must have one of {{ options.extnames }} extension names",
    "username": "Too long username",
    "bio": "Too long bio",
    "old_pass.minLength": "Wrong Password",
    "new_pass.minLength": "Too short new password",
    "confirm_new_pass.minLength": "Too short confirm new password",
  };
}
