import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { SellerModule } from './module/seller/seller.module';
import { ProductModule } from './module/product/product.module';

@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: 'mongodb://root:root321@mongodb:27017',
      dbName: 'db'
    })
  }), SellerModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
