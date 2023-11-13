import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Appointment1699796224866 implements MigrationInterface {

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
                  name: "portfolio_id",
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
                {
                    name: "service",
                    type: "enum",
                    enum: ["tattoo", "piercing"],
                    default: '"tattoo"'
                },
                {
                  name: "status",
                  type: "enum",
                  enum: ["pending", "approved", "canceled"],
                  default: '"pending"'
                },
                {
                  name: "is_active",
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
                  columnNames: ["portfolio_id"],
                  referencedTableName: "portfolios",
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
