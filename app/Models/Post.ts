import { DateTime } from "luxon";
import { BaseModel, column, BelongsTo, HasMany } from "@ioc:Adonis/Lucid/Orm";
import { belongsTo, hasMany } from "@adonisjs/lucid/build/src/Orm/Decorators";
import {
  AttachmentContract,
  attachment,
} from "@ioc:Adonis/Addons/AttachmentLite";
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

  @attachment({ preComputeUrl: true })
  public file: AttachmentContract | null;

  @column()
  public like: number;

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
