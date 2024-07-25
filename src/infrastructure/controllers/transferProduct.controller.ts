import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { TransferProduct } from '../../domain/entities/transferProduct.entity';
import { TransferProductService } from 'src/domain/services/transferProduct.service';
import { CreateTransferProductDto } from 'src/application/dtos/create-transferProduct.dto';

@Controller('transfer-products')
export class TransferProductController {
  constructor(private readonly transferProductService: TransferProductService) {}

  @Post()
  async create(@Body() createTransferProductDto: CreateTransferProductDto): Promise<TransferProduct> {

    return this.transferProductService.create(createTransferProductDto);
  }

  @Get()
  async findAll(): Promise<TransferProduct[]> {
    return this.transferProductService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<TransferProduct | null> {
    return this.transferProductService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTransferProductDto: CreateTransferProductDto): Promise<TransferProduct> {

    return this.transferProductService.update(id, updateTransferProductDto);
  }
}
