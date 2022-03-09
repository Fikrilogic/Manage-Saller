import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/schemas/product.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Product", schema: ProductSchema }])],
    providers: [],
    controllers: []
})
export class ProductModule { }
