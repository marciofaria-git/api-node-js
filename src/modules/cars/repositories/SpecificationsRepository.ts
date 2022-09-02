import { Specification } from "../model/Spectification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository{
  private specifications: Specification[]

  constructor(){
    this.specifications = [];
  }
  
  create({ description, name }: ICreateSpecificationDTO): void {
    const specifications = new Specification();

    Object.assign(specifications, {
      name,
      description,
      created_at: new Date(),
    })

    this.specifications.push(specifications);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name);
    return specification
  }

}

export {SpecificationRepository}