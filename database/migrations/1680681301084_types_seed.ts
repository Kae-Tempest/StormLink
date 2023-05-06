import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import Database from "@ioc:Adonis/Lucid/Database";
import Types from "App/Enums/Types";

export default class extends BaseSchema {
  public async up() {
    await Database.table("types_post").insert([
      { id: Types.TEXT, name: "Text" },
      { id: Types.IMAGE, name: "Image" },
    ]);
  }

  public async down() {
    await Database.from("types_post")
      .whereIn("id", [Types.TEXT, Types.IMAGE])
      .delete();
  }
}
