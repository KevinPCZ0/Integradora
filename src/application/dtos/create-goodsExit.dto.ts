import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateGoodExitDto {
    
    @IsNumber()
    @IsNotEmpty({message: "Dato requerido"})
    productId: number;
    
    @IsNotEmpty({message: "Dato requerido"})
    @IsDate({message: "Dato requerido"})
    date: Date;
    
    @IsNumber()
    @IsNotEmpty({message: "Dato requerido"})
    quantity: number;
    
    @IsString({message: " Debe ser tipo texto"})
    @IsNotEmpty({message: "Dato requerido"})
    color: string;
    
    @IsString({message: " Debe ser tipo texto"})
    @IsNotEmpty({message: "Dato requerido"})
    saleNumber: string;
    
    @IsString({message: " Debe ser tipo texto"})
    @IsNotEmpty({message: "Dato requerido"})
    paymentType: string;
    
    @IsString({message: "Debe ser tipo texto"})
    @IsNotEmpty({message: "Dato requerido"})
    location: string;
    
    @IsString({message: " Debe ser tipo texto"})
    @IsNotEmpty({message: "Dato requerido"})
    driver: string;
    
    @IsString({message: " Debe ser tipo texto"})
    @IsNotEmpty({message: " es requerido"})
    assistant: string;
    
    @IsString({message: " Debe ser tipo texto"})
    @IsNotEmpty({message: "Dato requerido"})
    deliveredBy: string;
    
    
    @IsNotEmpty({message: "Dato requerido"})
    @IsDate()
    exitTime: Date;
    
    @IsNumber()
    @IsNotEmpty({message: "Dato requerido"})
    freightID: number;

    @IsNumber()
    @IsNotEmpty({message: "Dato requerido"})
    userId: number;
}
