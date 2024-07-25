import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Freight } from '../../domain/entities/freight.entity';
import { FreightService } from 'src/domain/services/freight.service';
import { CreateFreightDto } from 'src/application/dtos/create-freight.dto';

@Controller('freights')
export class FreightController {
  constructor(private readonly freightService: FreightService) {}

  @Post()
  async create(@Body() createFreightDto: CreateFreightDto): Promise<Freight> {
    return this.freightService.create(createFreightDto);
  }

  @Get()
  async findAll(): Promise<Freight[]> {
    return this.freightService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Freight | null> {
    return this.freightService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateFreightDto: CreateFreightDto): Promise<Freight> {
    return this.freightService.update(id, updateFreightDto);
  }
}
