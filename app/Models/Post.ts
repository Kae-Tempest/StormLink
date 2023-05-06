import { DateTime } from "luxon";
import { BaseModel, column, BelongsTo, HasMany } from "@ioc:Adonis/Lucid/Orm";
import { belongsTo, hasMany } from "@adonisjs/lucid/build/src/Orm/Decorators";
import User from "App/Models/User";
import Comment from "App/Models/Comment";
import Type from "App/Models/Type";

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public user_id: number;

  @column()
  public type_post: number;

  @column()
  public size: string;

  @column()
  public description: string | null;

  @column() // attachment lite ?
  public path: string | null;

  @column()
  public like: number;

  @column()
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @hasMany(() => Comment)
  public comment: HasMany<typeof Comment>;

  @belongsTo(() => Type)
  public role: BelongsTo<typeof Type>;
}
