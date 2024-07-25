import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { BranchService } from 'src/domain/services/branch.service';
import { Branch } from '../../domain/entities/branch.entity';
import { CreateBranchDto } from 'src/application/dtos/create-branch.dto';

@Controller('branches')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post()
  async create(@Body() createBranchDto: CreateBranchDto): Promise<Branch> {
    return this.branchService.create(createBranchDto);
  }

  @Get()
  async findAll(): Promise<Branch[]> {
    return this.branchService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Branch | null> {
    return this.branchService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() createBranchDto: CreateBranchDto): Promise<Branch> {
    return this.branchService.update(id, createBranchDto);
  }

}
