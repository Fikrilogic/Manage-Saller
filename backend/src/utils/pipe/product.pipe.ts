import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Product } from 'src/interface/product.interface';


@Injectable()
export class ProductPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {


    return value;
  }
}
