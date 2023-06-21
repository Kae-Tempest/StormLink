import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    username: schema.string({}, [rules.maxLength(12)]),
    password: schema.string({}, [rules.minLength(8)]),
  });
  public messages: CustomMessages = {
    "username.maxLength": "Username too long",
    "password.minLength": "Password too short",
  };
}
