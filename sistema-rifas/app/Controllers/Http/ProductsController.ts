import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import Product from "App/Models/Product";
import StoreProductValidator from "App/Validators/StoreProductValidator";


export default class ProductsController {
  public async store({ request, response }: HttpContextContract) {
    Logger.info("Store Produto");
    const userData = await request.validate(StoreProductValidator);
    if(!await Product.create(userData))

    // const address 

    return response.created();
  }
  public async index({ request, response }: HttpContextContract) {
    Logger.info("index of Products");
    const products = await Product.all();
    return response.ok(products);
  }
  public async findByName({ request, response }: HttpContextContract) {
    Logger.info("List Products of Name");
    const products = await Product.findBy("name","carro");
    return response.ok(products);
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
