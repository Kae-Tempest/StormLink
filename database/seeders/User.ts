import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import {UserFactory} from "Database/factories/users";

export default class extends BaseSeeder {
  public async run () {
    await UserFactory.createMany(10)
  }
}
