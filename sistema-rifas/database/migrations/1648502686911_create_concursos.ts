import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateConcursos extends BaseSchema {
  protected tableName = 'create_concursos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('completion_date').notNullable()
      table.string('numbers_available').notNullable()
      table
      .integer('product_id')
      .unsigned()
      .references('products.id')
      .onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
