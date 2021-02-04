import { Migration } from '@mikro-orm/migrations';

export class Migration20210204160351 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "doggo" drop column "story";');
  }

}
