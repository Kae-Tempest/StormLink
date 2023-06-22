import { DateTime } from "luxon";
import {
  BaseModel,
  beforeSave,
  BelongsTo,
  column,
  HasMany,
  HasOne,
} from "@ioc:Adonis/Lucid/Orm";
import {
  belongsTo,
  hasMany,
  hasOne,
} from "@adonisjs/lucid/build/src/Orm/Decorators";
import {
  attachment,
  AttachmentContract,
} from "@ioc:Adonis/Addons/AttachmentLite";
import Post from "App/Models/Post";
import Role from "App/Models/Role";
import Comment from "App/Models/Comment";
import Hash from "@ioc:Adonis/Core/Hash";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column()
  public email: string;

  @column()
  public password: string;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @column()
  public rememberMeToken: string | null;

  @column()
  public roleId: number;

  @column()
  public biography: string | null;

  @attachment({ preComputeUrl: true })
  public avatar: AttachmentContract | null;

  @column()
  public bio: string;

  @column()
  public nbFollower: number;

  @column()
  public nbFollowed: number;

  @column()
  public twitchId: string | null;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasOne(() => Post)
  public post: HasOne<typeof Post>;

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>;

  @hasMany(() => Comment)
  public comment: HasMany<typeof Comment>;
}
