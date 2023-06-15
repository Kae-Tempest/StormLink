import Logger from "@ioc:Adonis/Core/Logger";
import HttpExceptionHandler from "@ioc:Adonis/Core/HttpExceptionHandler";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ExceptionHandler extends HttpExceptionHandler {
  protected statusPages = {
    "403": "errors/unauthorized",
    "404": "errors/not-found",
    "500..599": "errors/server-error",
  };

  constructor() {
    super(Logger);
  }

  public async handle(error: any, { response, session }: HttpContextContract) {
    if (
      ["E_INVALID_AUTH_PASSWORD", "E_INVALID_AUTH_UID"].includes(error.code)
    ) {
      session.flash("errors", {
        code: "E_INVALID_CREDENTIAL",
        msg: "Email or Password is invalid",
      });

      return response.redirect("/login");
    }

    if (["E_UNAUTHORIZED_ACCESS"].includes(error.code)) {
      session.flash("errors", {
        code: "E_UNAUTHORIZED_ACCESS",
        msg: "UNAUTHORIZED ACCESS",
      });

      return response.redirect("/login");
    }
  }
}
