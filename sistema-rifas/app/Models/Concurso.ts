import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Concurso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public numbers_available: number
 
  @column()
  public product_id: number

  @column.dateTime()
  public completion_date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
