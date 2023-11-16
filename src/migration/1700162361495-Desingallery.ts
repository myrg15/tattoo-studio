import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Desingallery1700162361495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "desingallery",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "date",
                        type: "date",
                    },
                    {
                        name: "imag",
                        type: "varchar",
                        length: "512",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "200"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP"
                    },
                ],
            }),
            true
        ); 
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("desingallery");
    }
}
