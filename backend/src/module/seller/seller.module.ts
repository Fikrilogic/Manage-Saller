import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerController } from 'src/controller/seller/seller.controller';
import { SellerSchema } from 'src/schemas/seller.schema';
import { SellerService } from 'src/service/seller/seller.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Seller", schema: SellerSchema }])],
    providers: [SellerService],
    controllers: [SellerController]
})
export class SellerModule { }
