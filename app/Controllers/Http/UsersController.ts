import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import UserSettingValidator from "App/Validators/UserSettingValidator";
import UserValidator from "App/Validators/UserValidator";
import { Attachment } from "@ioc:Adonis/Addons/AttachmentLite";

export default class UsersController {
  public async index({}: HttpContextContract) {
    // return all users
  }

  public async signup({ request, response }: HttpContextContract) {
    const payload = await request.validate(UserValidator);
    await User.create({
      ...payload,
      email: payload.email.toLowerCase(),
      roleId: 1,
      nbFollowed: 0,
      nbFollower: 0,
      bio: "",
      avatar: null,
      rememberMeToken: null,
      twitchId: null,
    });
    return response.redirect("/login");
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const email = await request.input("email").toLowerCase();
    const password = await request.input("password");
    await auth.attempt(email, password);
    response.redirect("/");
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout();
    response.redirect("/login");
  }

  public async show({ request }: HttpContextContract) {
    const id = request.params().id;
    return User.find(id);
  }

  public async edit({ request, response }: HttpContextContract) {
    const payload = await request.validate(UserSettingValidator);
    const user = User.findOrFail(request.params().id);
    if (payload.new_pass && payload.confirm_new_pass && payload.old_pass) {
      if (payload.old_pass != payload.new_pass) {
        if (payload.new_pass == payload.confirm_new_pass) {
          delete payload.confirm_new_pass;
          delete payload.old_pass;
        } else {
          return response
            .redirect()
            .status(400)
            .toPath(`/user/${request.params().id}`);
        }
      } else {
        return response
          .redirect()
          .status(400)
          .toPath(`/user/${request.params().id}`);
      }
    }
    if (!payload.avatar) {
      (await user).merge({ ...payload, avatar: (await user).avatar }).save();
      return response.redirect("/");
    } else {
      (await user)
        .merge({ ...payload, avatar: Attachment.fromFile(payload.avatar) })
        .save();
      return response.redirect("/");
    }
  }

  public async destroy({}: HttpContextContract) {
    // delete one user
  }
}
