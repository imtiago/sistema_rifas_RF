import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Hash from "@ioc:Adonis/Core/Hash";
import Logger from "@ioc:Adonis/Core/Logger";
import User from "App/Models/User";
import StoreUserValidator from "App/Validators/StoreUserValidator";
import UserLoginValidator from "App/Validators/UserLoginValidator";

export default class UsersController {
  public async login({ request, response }: HttpContextContract) {
    Logger.info("Login");
    const [, hash] = request.headers().authorization?.split(" ");
    const [email, password] = Buffer.from(hash, "base64").toString().split(":");

    const user = await User.findBy("email", email);

    if (!user || !(await Hash.verify(user?.password || "", password)))
      return response.forbidden("Message: e-mail or password incorrect");

    return response.status(200);
  }
  public async store({ request, response }: HttpContextContract) {
    Logger.info("Store User");
    const userData = await request.validate(StoreUserValidator);
    if (!(await User.create(userData)))
      // const address

      return response.created();
  }
  public async index({ request, response }: HttpContextContract) {
    Logger.info("index of Users");
    const users = await User.all();
    return response.ok(users);
  }
  public async update({ request, response }: HttpContextContract) {
    Logger.info("A info message");
    console.log(request.all());
    return response.status(200);
  }
  public async delete({ request, response }: HttpContextContract) {
    Logger.info("A info message");
    console.log(request.all());
    return response.status(200);
  }
  public async find({ request, response }: HttpContextContract) {
    Logger.info("A info message");
    console.log(request.all());
    return response.status(200);
  }
}
