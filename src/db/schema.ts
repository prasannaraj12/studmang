import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }),
  department: varchar("department", { length: 100 }),
  age: integer("age"),
});