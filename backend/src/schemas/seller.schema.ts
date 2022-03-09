import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'
import { Product } from "./product.schema";
import { v4 as uuidv4 } from 'uuid'


@Schema()
export class Seller {
    @Prop({ default: uuidv4() })
    _id: string

    @Prop({ type: String, required: true })
    name: string

    @Prop({ type: String, required: true })
    address: string

    @Prop({ type: [{ _id: { type: Number, default: Math.floor(Date.now() / 1000) }, name: { type: String }, price: { type: Number }, stock: { type: Number } }] })
    products: Product[]

}

export type sellerDocument = Seller & Document;

export const SellerSchema = SchemaFactory.createForClass(Seller);