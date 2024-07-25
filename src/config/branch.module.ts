import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { BranchController } from 'src/infrastructure/controllers/branch.controller';
import { BranchService } from 'src/domain/services/branch.service';
import { PrismaBranchRepository } from 'src/infrastructure/prisma/prisma-branch-repository';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';


@Module({
  imports: [PrismaModule],
  controllers: [BranchController],
  providers: [
    BranchService,
    PrismaService,{
        provide: 'BranchRepository',
        useClass: PrismaBranchRepository,
    },
  ],
  exports: [BranchService],
})
export class BranchModule {}
