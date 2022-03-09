import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'


@Schema()
export class Product {
    @Prop({ default: Math.floor(Date.now() / 1000).toString() })
    _id: string

    @Prop()
    name: string

    @Prop()
    price: number

    @Prop()
    stock: number
}
export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);