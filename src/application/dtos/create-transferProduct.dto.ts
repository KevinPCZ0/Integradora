import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateTransferProductDto {

  @IsNotEmpty({message: "Dato requerido"})
  date : Date;
  
  @IsString()
  @IsNotEmpty({message: "Dato requerido"})
  folio : string;
  
  @IsString({message: " Debe ser tipo texto"})
  @IsNotEmpty({message: "Dato requerido"})
  observations : string;
  
  @IsString({message: " Debe ser tipo texto"})
  @IsNotEmpty({message: "Dato requerido"})
  driver : string;
  
  @IsString({message: " Debe ser tipo texto"})
  @IsNotEmpty({message: "Dato requerido"})
  assistant : string;
  
  @IsString({message: " Debe ser tipo texto"})
  @IsNotEmpty({message: "Dato requerido"})
  receivedBy : string;
  

  @IsNumber()
  @IsNotEmpty({message: "Dato requerido"})
  productId : number;
  
  @IsNumber()
  @IsNotEmpty({message: "Dato requerido"})
  userId : number;

  @IsNumber()
  @IsNotEmpty({message: "Dato requerido"})
  fromBranchId : number;
  
  @IsNumber()
  @IsNotEmpty({message: "Dato requerido"})
  toBranchId : number;

}
