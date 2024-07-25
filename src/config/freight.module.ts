import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { FreightController } from 'src/infrastructure/controllers/freight.controller';
import { FreightService } from 'src/domain/services/freight.service';
import { PrismaFreightRepository } from 'src/infrastructure/prisma/prisma-freight-repository';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';


@Module({
  imports: [PrismaModule],
  controllers: [FreightController],
  providers: [
    FreightService,
    PrismaService,{
        provide: 'FreightRepository',
        useClass: PrismaFreightRepository,
    },
  ],
  exports: [FreightService],
})
export class FreightModule {}
