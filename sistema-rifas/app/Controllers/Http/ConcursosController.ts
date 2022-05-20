import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import Concurso from "App/Models/Concurso";
import StoreConcursoValidator from "App/Validators/StoreConcursoValidator";

export default class ConcursosController {
  public async store({ request, response }: HttpContextContract) {
    Logger.info("Store Concurso");
    const concursoData = await request.validate(StoreConcursoValidator);
    if (!(await Concurso.create(concursoData)))
      // const address

      return response.created();
  }
  public async index({ request, response }: HttpContextContract) {
    Logger.info("index of concursos");
    const consursos = await Concurso.all();
    return response.ok(consursos);
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
