import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import {
  attachment,
  AttachmentContract,
} from "@ioc:Adonis/Addons/AttachmentLite";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column()
  public email: string;

  @column()
  public password: string;

  @column()
  public rememberMeToken: string | null;

  @column()
  public roleId: number;

  @column()
  public biography: string;

  @attachment()
  public avatar: AttachmentContract;

  @column()
  public nbFollower: number;

  @column()
  public nbFollowed: number;

  @column()
  public twitchId: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
