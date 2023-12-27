import { IsAlpha, IsInt, IsNotEmpty, IsPositive, Min } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty()
    author: string;
    
    @IsNotEmpty()
    title: string;
    
    @IsPositive()
    @IsInt()
    @IsNotEmpty()
    year_of_publication: number;
}