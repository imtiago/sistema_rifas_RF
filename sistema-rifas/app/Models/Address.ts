import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cep: string

  @column()
  public logradouro: string
  
  @column()
  public number: number

  @column()
  public neighborhood: string
  
  @column()
  public city: string

  @column()
  public uf: string
  
  @column()
  public complement: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User)
  public posts: HasMany<typeof Post>
}
