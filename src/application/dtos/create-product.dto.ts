import { Status } from '@prisma/client';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString({message: " Debe ser tipo texto"})
  @IsNotEmpty({message: "Dato requerido"})
  name: string;

  @IsString({message: " Debe ser tipo texto"})
  @IsNotEmpty({message: "Dato requerido"})
  brand: string;

  @IsString({message: " Debe ser tipo texto"})
  @IsNotEmpty({message: "Dato requerido"})
  model: string;

  @IsString({message: " Debe ser tipo texto"})
  @IsNotEmpty({message: "Dato requerido"})
  description: string;

  @IsString({message: " Debe ser tipo texto"})
  @IsNotEmpty({message: "Dato requerido"})
  category: string;

  @IsNumber()
  @IsNotEmpty({message: "Dato requerido"})
  stock: number;

  @IsNumber()
  @IsNotEmpty({message: "Dato requerido"})
  productCode: number;

  status: Status

  @IsNumber()
  @IsNotEmpty({message: "Dato requerido"})
  branchId: number;
} 
