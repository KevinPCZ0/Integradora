import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { GoodsEntryService } from 'src/domain/services/goodsEntry.service';
import { GoodsEntryController } from 'src/infrastructure/controllers/goodsEntry.controller';
import { PrismaGoodsEntryRepository } from 'src/infrastructure/prisma/prisma-goodsEntry-repository';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';


@Module({
  imports: [PrismaModule],
  controllers: [GoodsEntryController],
  providers: [
    GoodsEntryService,
    PrismaService,{
        provide: 'GoodsEntryRepository',
        useClass: PrismaGoodsEntryRepository,
    },
  ],
  exports: [GoodsEntryService],
})

export class GoodsEntryModule {}
  