import { Controller, Get, Post, Body, Param, Delete, Patch, BadRequestException, Query, Logger } from '@nestjs/common';
import { CreateProductDto } from 'src/Dto/product.dto';
import { CreateSellerDto } from 'src/Dto/seller.dto';
import { UpdateProductDto } from 'src/Dto/update-product.dto';
import { UpdateSellerDto } from 'src/Dto/update-seller.dto';
import { Product } from 'src/schemas/product.schema';
import { Seller } from 'src/schemas/seller.schema';
import { SellerService } from 'src/service/seller/seller.service';

@Controller('seller')
export class SellerController {

    private readonly logger = new Logger(SellerService.name);

    constructor(private sellerService: SellerService) {
    }

    @Post()
    async createSeller(@Body() createSellerDto: CreateSellerDto): Promise<Seller> {
        return await this.sellerService.createSeller(createSellerDto);
    }

    @Post("/:id")
    async addProductToSeller(@Param("id") id: string, @Body() product: CreateProductDto): Promise<Seller> {
        return await this.sellerService.addProductToExistSeller(id, product)
    }

    @Get()
    async getAllSeller(): Promise<Seller[]> {
        return this.sellerService.findAll();
    }

    @Get("/:id")
    async getSellerById(@Param("id") id: string): Promise<Seller> {
        return this.sellerService.findSellerById(id);
    }

    @Get("/:id/products")
    async getProductByIdSeller(@Param("id") id: string): Promise<Seller> {
        const query = await this.sellerService.findAllProductBySellerId(id);
        this.logger.log(query);
        return query
    }

    @Patch("/:id")
    async updateSeller(@Param("id") id: string, @Body() updateSellerDto: UpdateSellerDto) {
        return await this.sellerService.updateDataSeller(id, updateSellerDto)
    }

    @Delete("/:id")
    async deleteSellerById(@Param("id") id: string): Promise<String> {
        const seller = await this.sellerService.deleteSellerById(id)
        return seller;
    }

    @Delete("/:sellerId/:productId")
    async deleteProductBySellerId(@Param("sellerId") sellerId: string, @Param("productId") productId: string, @Query("name") name: string): Promise<String> {
        try {
            await this.sellerService.deleteProductInSellerById(sellerId, +productId, name);
            return `product with id ${productId} has been deleted`
        } catch (e) {
            throw new BadRequestException(e)
        }
    }
}
