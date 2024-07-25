import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateFreightDto {
  @IsString({message: "La ciudad es tipo texto"})
  @IsNotEmpty({message: "La cuidad es requerida"})
  city: string;

  @Min(1)
  @IsNumber ()
  @IsNotEmpty({message: "El precio es requerido"})
  price: number;
}
