import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Branch } from 'src/domain/entities/branch.entity';


@Injectable()
export class PrismaBranchRepository {
  constructor(private prisma: PrismaService) {}

  async create(branch: Branch): Promise<Branch> {
    const existingBranch = await this.prisma.branch.findFirst({
      where: {
        name: branch.name,
        adress: branch.adress,
      },
    });
  
    if (existingBranch) {
      throw new BadRequestException('La sucursal ya existe');
    }
    return this.prisma.branch.create({ data: branch });
  }

  async findAll(): Promise<Branch[]> {
    return this.prisma.branch.findMany();
  }

  async findOne(id: number): Promise<Branch | null> {
    return this.prisma.branch.findUnique({ where: { id} });
  }

  async update(id: number, branch: Branch): Promise<Branch> {
    return this.prisma.branch.update({ where: { id}, data: branch });
  }
}
