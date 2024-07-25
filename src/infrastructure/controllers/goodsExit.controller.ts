import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateGoodExitDto } from 'src/application/dtos/create-goodsExit.dto';
import { GoodsExit } from 'src/domain/entities/goodsExit.entity';
import { GoodsExitService } from 'src/domain/services/goodsExit.service';


@Controller('goodExits')
export class GoodsExitController {
  constructor(private readonly goodExitService: GoodsExitService) {}

  @Post()
  async create(@Body() createGoodExitDto: CreateGoodExitDto): Promise<GoodsExit> {
    
    return this.goodExitService.create(createGoodExitDto);
  }

  @Get()
  async findAll(): Promise<GoodsExit[]> {
    return this.goodExitService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<GoodsExit| null> {
    return this.goodExitService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateGoodExitDto: CreateGoodExitDto): Promise<GoodsExit> {

    return this.goodExitService.update(id, updateGoodExitDto);
  }
}
