import { DateTime } from "luxon";
import { BaseModel, column, HasMany } from "@ioc:Adonis/Lucid/Orm";
import { hasMany } from "@adonisjs/lucid/build/src/Orm/Decorators";
import User from "App/Models/User";

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => User)
  public users: HasMany<typeof User>;
}
