const { table } = require("../dbConfig");

exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.text('name',128).unique().notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('.cars');
};
