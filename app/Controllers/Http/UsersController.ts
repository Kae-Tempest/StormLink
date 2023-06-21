import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import UserValidator from "App/Validators/UserValidator";

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

  public async store({}: HttpContextContract) {
    // create a user
  }

  public async show({ request }: HttpContextContract) {
    const id = request.params().id;
    return User.find(id);
  }

  public async update({}: HttpContextContract) {
    // update one user
  }

  public async destroy({}: HttpContextContract) {
    // delete one user
  }
}
