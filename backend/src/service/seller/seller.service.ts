import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateProductDto } from 'src/Dto/product.dto';
import { CreateSellerDto } from 'src/Dto/seller.dto';
import { UpdateProductDto } from 'src/Dto/update-product.dto';
import { UpdateSellerDto } from 'src/Dto/update-seller.dto';
import { Product } from 'src/schemas/product.schema';
import { Seller, sellerDocument } from 'src/schemas/seller.schema';
import { parse } from "uuid"

@Injectable()
export class SellerService {


    constructor(@InjectModel('Seller') private readonly sellerModel: Model<sellerDocument>) {
    }

    async createSeller(createSellerDto: CreateSellerDto): Promise<Seller> {
        const { name, address, product } = createSellerDto;

        const create = await this.sellerModel.create({
            name,
            address,
            products: [...product]
        })

        return create
    }

    async addProductToExistSeller(id: string, products: CreateProductDto): Promise<Seller> {
        const { name, price, stock } = products

        return await this.sellerModel.findByIdAndUpdate(id, {
            $addToSet: {
                products: {
                    name,
                    price,
                    stock
                }
            }
        }).exec()
    }

    async findAll(): Promise<Seller[]> {
        return await this.sellerModel.find().exec();
    }
    async findAllProductBySellerId(id: string): Promise<any> {
        const query = await this.sellerModel.find({ _id: id }).select({ name: 0, address: 0 }).exec()

        return query
    }

    async findSellerById(id: string): Promise<any> {
        return await this.sellerModel.findById(id).exec();
    }



    async updateDataSeller(id: string, updateSellerDto: UpdateSellerDto): Promise<Seller> {
        const { name, address } = updateSellerDto
        return await this.sellerModel.findByIdAndUpdate(id, {
            name,
            address
        })
    }

    async updateDataProductSellerById(sellerId: string, product: UpdateProductDto) {
        const { id, name, stock, price } = product;
        return await this.sellerModel.findOneAndUpdate(
            { _id: { $in: sellerId }, "products._id": id },
            {
                "$set": {
                    "products.$.name": name,
                    "products.$.price": price,
                    "products.$.stock": stock,
                }
            }
        ).exec()
    }

    async deleteSellerById(id: string): Promise<string> {
        try {
            await this.sellerModel.findByIdAndRemove(id).exec()
            return "success delete seller"
        } catch {
            new BadRequestException("Delete User Failed")
        }
    }


    async deleteProductInSellerById(sellerId: string, productId: number, name: string): Promise<any> {
        const deleteData = await this.sellerModel.findByIdAndUpdate({
            _id: sellerId
        }, {
            $pull: {
                products: { _id: productId, name }
            }
        }).exec()
        return deleteData;
    }
}
