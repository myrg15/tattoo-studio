import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Portfolio1699795893645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "portfolios",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "employees_id",
                  type: "int",
                },
                
                {
                    name: "imag",
                    type: "varchar",
                    length: "50",
                },
                {
                    name: "description",
                    type: "varchar",
                    length: "50",
                },
                { name: "is_active",
                  type: "boolean",
                  default: "true",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "CURRENT_TIMESTAMP",
                },
                {
                  name: "update_at",
                  type: "timestamp",
                  default: "CURRENT_TIMESTAMP",
                  onUpdate: "CURRENT_TIMESTAMP",
                },
              ],
              foreignKeys: [
                {
                  columnNames: ["employees_id"],
                  referencedTableName: "employees",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
              ],
            }),
            true
          );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("portfolios");
    }
}
