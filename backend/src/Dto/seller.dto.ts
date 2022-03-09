import { IsString, MinLength } from "class-validator"
import { Product } from "src/interface/product.interface"


export class CreateSellerDto {

    @IsString()
    @MinLength(5)
    name: string

    @IsString()
    address: string

    product: Product[]
}