import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
// import Address from './Address'


export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public name: string
  
  @column()
  public cpf: string

  @column()
  public rg: string

  @column()
  public email: string

  @column.dateTime()
  public birthDay: DateTime

  @column({ serializeAs: null })
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // @belongsTo(()=> Address )
  // public address: BelongsTo<typeOf Address>

  //hooks
  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}