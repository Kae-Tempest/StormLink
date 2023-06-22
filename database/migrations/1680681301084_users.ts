import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("role_id")
        .unsigned()
        .references("id")
        .inTable("roles")
        .defaultTo(1);
      table.string("username", 50).notNullable().unique();
      table.string("email", 255).notNullable().unique();
      table.string("password", 180).notNullable();
      table.json("avatar").nullable();
      table.string("bio", 255);
      table.string("remember_me_token").nullable();
      table.integer("nb_follower").defaultTo(0);
      table.integer("nb_followed").defaultTo(0);
      table.string("twitch_id").nullable().unique();
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
