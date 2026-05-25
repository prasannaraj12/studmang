import { Injectable } from '@nestjs/common';
import { db } from '../db';
import { students } from '../db/schema';

@Injectable()
export class StudentsService {

async create(createStudentDto: any) {

  await db.insert(students).values({
    name: createStudentDto.name,
    department: createStudentDto.department,
    age: createStudentDto.age,
  });

  return {
    message: "Student added successfully",
  };
}


  async findAll() {
    return await db.select().from(students);
  }

  async findOne(id: number) {
    return `This action returns student #${id}`;
  }

  async update(id: number, updateStudentDto: any) {
    return `This action updates student #${id}`;
  }

  async remove(id: number) {
    return `This action removes student #${id}`;
  }
}