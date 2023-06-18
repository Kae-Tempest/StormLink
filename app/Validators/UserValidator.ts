import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    username: schema.string({}, [rules.maxLength(12)]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: "users", column: "email", caseInsensitive: true }),
    ]),
    password: schema.string({}, [rules.minLength(8)]),
  });
  public messages: CustomMessages = {
    'username': "Username too long",
    'password': "Password too short",
  };
}
