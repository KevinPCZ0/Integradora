import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TransferProduct } from '../../domain/entities/transferProduct.entity';
import { CreateTransferProductDto } from 'src/application/dtos/create-transferProduct.dto';

@Injectable()
export class PrismaTransferProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(productId: number, transferProduct: CreateTransferProductDto): Promise<TransferProduct> {
    if(!this.isValidCreateTransferProduct(transferProduct) ) {
      throw new BadRequestException('Transfer product invalido')
    }
    const existingTransfer = await this.prisma.transferProduct.findFirst({
      where: { folio: transferProduct.folio },
    })
    if(existingTransfer) {
      throw new BadRequestException('Transfer product ya existe')
    }
    const product = await this.prisma.product.findUnique({
      where: { id: productId }
    })
    if(!product) {
      throw new BadRequestException('Producto no existe')
    }
    const newTransfer = await this.prisma.transferProduct.create({
      data: {
        date: transferProduct.date,
        folio: transferProduct.folio,
        observations: transferProduct.observations,
        driver: transferProduct.driver,
        assistant: transferProduct.assistant,
        receivedBy: transferProduct.receivedBy,
        productId: transferProduct.productId,
        userId: transferProduct.userId,
        fromBranchId: transferProduct.fromBranchId,
        toBranchId: transferProduct.toBranchId,
      },
    });

    return new  TransferProduct(
        newTransfer.date,
        newTransfer.folio,
        newTransfer.observations,
        newTransfer.driver,
        newTransfer.assistant,
        newTransfer.receivedBy,
        newTransfer.productId,
        newTransfer.userId,
        newTransfer.fromBranchId,
        newTransfer.toBranchId,
    );
  }

  async findAll(): Promise<TransferProduct[]> {
    return this.prisma.transferProduct.findMany();
  }
  async findOne(id: string): Promise<TransferProduct | null> {
    const transferID = parseInt(id, 10);
    return this.prisma.transferProduct.findUnique({ where: { id: transferID } });
  }
  async update(id: string, transferProduct: TransferProduct): Promise<TransferProduct> {
    const transferID = parseInt(id, 10);
    if (!this.isValidUpdateTransferProduct(transferProduct)) {
      throw new BadRequestException('Datos invalidos de transfer product.');
    }
    const updatedTransfer = await this.prisma.transferProduct.update({
      where: { id: transferID },
      data: transferProduct
    })
    return new TransferProduct(
      updatedTransfer.date,
      updatedTransfer.folio,
      updatedTransfer.observations,
      updatedTransfer.driver,
      updatedTransfer.assistant,
      updatedTransfer.receivedBy,
      updatedTransfer.productId,
      updatedTransfer.userId,
      updatedTransfer.fromBranchId,
      updatedTransfer.toBranchId,
    );
  }

  private isValidCreateTransferProduct(transferProduct: CreateTransferProductDto): boolean {
    return Boolean(transferProduct.date && transferProduct.folio && transferProduct.driver && transferProduct.assistant && transferProduct.receivedBy && transferProduct.fromBranchId && transferProduct.toBranchId)
  }

  private isValidUpdateTransferProduct(transferProduct: CreateTransferProductDto): boolean {
    return Boolean(transferProduct.date || transferProduct.folio || transferProduct.driver || transferProduct.assistant || transferProduct.receivedBy || transferProduct.fromBranchId || transferProduct.toBranchId)
  }
}