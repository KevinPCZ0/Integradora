import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Freight } from '../../domain/entities/freight.entity';

@Injectable()
export class PrismaFreightRepository {
  constructor(private prisma: PrismaService) {}

  async create(freight: Freight): Promise<Freight> {
    return this.prisma.freight.create({ data: freight });
  }

  async findAll(): Promise<Freight[]> {
    return this.prisma.freight.findMany();
  }

  async findOne(id: number): Promise<Freight | null> {
    return this.prisma.freight.findUnique({ where: { id } });
  }

  async update(id: number, freight: Freight): Promise<Freight> {
    return this.prisma.freight.update({ where: { id }, data: freight });
  }

}
