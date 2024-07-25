import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { GoodsEntryService } from 'src/domain/services/goodsEntry.service';
import { CreateGoodsEntryDto } from 'src/application/dtos/create-goodsEntry.dto';
import { GoodsEntry } from '../../domain/entities/goodsEntry.entity';

@Controller('goods-entries')
export class GoodsEntryController {
  constructor(private readonly goodsEntryService: GoodsEntryService) {}

  @Post()
  async create(@Body() createGoodsEntryDto: CreateGoodsEntryDto): Promise<GoodsEntry> {
    return this.goodsEntryService.create(createGoodsEntryDto);
  }

  @Get()
  async findAll(): Promise<GoodsEntry[]> {
    return this.goodsEntryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<GoodsEntry | null> {
    return this.goodsEntryService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateGoodsEntryDto: CreateGoodsEntryDto): Promise<GoodsEntry> {
  
    return this.goodsEntryService.update(id, updateGoodsEntryDto);
  }
}
