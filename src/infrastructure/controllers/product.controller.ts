import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
/* */
import { CreateProductDto } from 'src/application/dtos/create-product.dto';
import { Product } from 'src/domain/entities/product.entity';
import { ProductService } from 'src/domain/services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') productCode: number,
    @Body() updateProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.update(productCode, updateProductDto);
  }
}
