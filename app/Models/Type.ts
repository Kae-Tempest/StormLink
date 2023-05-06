import { DateTime } from "luxon";
import { BaseModel, column, HasMany } from "@ioc:Adonis/Lucid/Orm";
import { hasMany } from "@adonisjs/lucid/build/src/Orm/Decorators";
import Post from "App/Models/Post";

export default class Type extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Post)
  public users: HasMany<typeof Post>;
}
