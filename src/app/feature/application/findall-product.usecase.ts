import { Command } from "../../core/use-case/command";
import { Product } from "../domain/product";
import { ProductRepository } from "../domain/product.repository";

export class FindAllProductUseCase extends Command<void, Product[]>{
    constructor(private readonly productRepository: ProductRepository) {
        super()
    }

    override async internalExecute(): Promise<Product[]> {
        return this.productRepository.findAll();;
    }

}