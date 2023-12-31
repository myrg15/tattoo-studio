import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Appointment1700525747018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "appointment",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "users",
                  type: "int",
                },
                {
                  name: "employees",
                  type: "int",
                },
                {
                  name: "desingallery",
                  type: "int",
                },
                
                {
                  name: "date",
                  type: "timestamp",
                },
                {
                    name: "time",
                    type: "timestamp",
                },
                
              ],
              foreignKeys: [
                {
                  columnNames: ["users"],
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
                {
                  columnNames: ["employees"],
                  referencedTableName: "employees",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
                {
                  columnNames: ["desingallery"],
                  referencedTableName: "desingallery",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
              ],
            }),
            true
          );
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointment");
    }
}
