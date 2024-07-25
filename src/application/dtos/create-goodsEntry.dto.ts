import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateGoodsEntryDto {

    @IsNotEmpty({message: "La fecha es requerido"})
    date: Date;

    @IsNotEmpty({message: "La cantidad es requerida"})
    @IsNumber()
    quantity : number;
    
    @IsString({message: "El color es de tipo texto"})
    @IsNotEmpty({message: "El color es requerido"})
    color: string;
    
   
    @IsNotEmpty({message: "El codigo del producto es requerido"})
    @IsNumber()
    productCode: number;
    
    @IsString({message: "El folio es de tipo texto"})
    @IsNotEmpty({message: "El folio es requerido"})
    folio: string;
    
    @IsString({message: "La observacion es de tipo texto "})
    @IsNotEmpty({message: "La observacion es requerida"})
    observation: string;
    
    @IsString({message: "El origen es de tipo texto"})
    @IsNotEmpty({message: "El origen es requerido"})
    origin: string;
    
    @IsString({message: "Driver es de tipo texto"})
    @IsNotEmpty({message: "driver es requerido"})
    driver: string;
    
    @IsString({message: "assistant es tipo texto"})
    @IsNotEmpty({message: "assistant es requerida"})
    assistant: string;
    
    @IsString({message: " reciveBy es de tipo texto"})
    @IsNotEmpty({message:  "reciveBy es requerido"})
    reciveBy: string;
    
    @IsNotEmpty({message: "entryTime es requerido"})
    entryTime: Date;

    @IsNotEmpty({message: "El codigo del producto es requerido"})
    @IsNumber()
    productId: number;

    @IsNotEmpty({message: "El codigo del producto es requerido"})
    @IsNumber()
    userId: number;
}
