import { Injectable } from "@nestjs/common";
/* */
import { Product } from "src/domain/entities/product.entity";
/* */
import { PrismaService } from "./prisma.service";

@Injectable()
export class PrismaProductRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(product: Product): Promise<Product | null> {
    const newProduct = await this.prisma.product.create({
      data: {
        name: product.name,
        brand: product.brand,
        model: product.model,
        description: product.description,
        category: product.category,
        stock: product.stock,
        productCode: product.productCode,
        status: product.status,
        branchId: product.branchId,
      },
    });
    return new Product(
      newProduct.name,
      newProduct.brand,
      newProduct.model,
      newProduct.description,
      newProduct.category,
      newProduct.stock,
      newProduct.productCode,
      newProduct.status,
      newProduct.branchId,
    );
  }

  async findAll(): Promise<Product[] | null> {
    return this.prisma.product.findMany();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, data: Product): Promise<Product | null> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }
}
