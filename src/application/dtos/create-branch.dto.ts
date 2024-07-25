import { IsString, IsNotEmpty } from "class-validator";

export class CreateBranchDto {
  @IsString({message: 'El nombre es de tipo texto'})
  @IsNotEmpty({message: 'El nombre es requerido'})
  name: string;

  @IsString({message: 'El street es de tipo texto'})
  @IsNotEmpty({message: 'El street es requerido'})
  adress: string;
}
