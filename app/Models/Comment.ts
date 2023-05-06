import { DateTime } from "luxon";
import { BaseModel, BelongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import { belongsTo } from "@adonisjs/lucid/build/src/Orm/Decorators";
import User from "App/Models/User";
import Post from "App/Models/Post";

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public post_id: number;

  @column()
  public user_id: number;

  @column()
  public content: string;

  @column()
  public like: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>;
}
