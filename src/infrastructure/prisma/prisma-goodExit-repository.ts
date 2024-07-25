import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { GoodsExit } from 'src/domain/entities/goodsExit.entity';



@Injectable()
export class PrismaGoodsExitRepository{
    constructor(private readonly prisma: PrismaService) {}
    async create(exit: GoodsExit): Promise<GoodsExit | OnBeforeUnloadEventHandlerNonNull> {
    const newExit = await this.prisma.goodsExit.create({
      data: {
        date: exit.date,
        quantity: exit.quantity,
        color: exit.color,
        saleNumber: exit.saleNumber,
        paymentType: exit.paymentType,
        location: exit.location,
        driver: exit.driver,
        assistant: exit.assistant,
        deliveredBy: exit.deliveredBy,
        exitTime: exit.exitTime,
        userId: exit.userId,
        freightID: exit.freightID,
        productId: exit.productId,
      },
    });

    return new GoodsExit(
      newExit.date,
      newExit.quantity,
      newExit.color,
      newExit.saleNumber,
      newExit.paymentType,
      newExit.location,
      newExit.driver,
      newExit.assistant,
      newExit.deliveredBy,
      newExit.productId,
      newExit.exitTime,
      newExit.userId,
      newExit.freightID,
    );
  }
  
    async findAll(): Promise<GoodsExit[]> {
      return this.prisma.goodsExit.findMany();
    }
  
    async findOne(id: number): Promise<GoodsExit | null> {
      return this.prisma.goodsExit.findUnique({ where: { id } });
    }
  
    async update(id: number, goodExit: GoodsExit): Promise<GoodsExit> {
      return this.prisma.goodsExit.update({ where: { id }, data: goodExit });
    }
  
    async delete(id: number): Promise<void> {
      await this.prisma.goodsExit.delete({ where: { id } });
    }
}
