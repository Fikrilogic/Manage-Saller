import { PartialType } from "@nestjs/mapped-types";
import { IsNumber } from "class-validator";
import { CreateProductDto } from "./product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsNumber()
    id: number
}