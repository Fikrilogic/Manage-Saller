import { PartialType } from "@nestjs/mapped-types";
import { CreateSellerDto } from "./seller.dto";

export class UpdateSellerDto extends PartialType(CreateSellerDto) { }