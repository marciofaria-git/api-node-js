import { Specification } from "../model/Spectification";

export interface ICreateSpecificationDTO{
  name: string;
  description: string;
}

interface ISpecificationRepository{

  create({description, name}:ICreateSpecificationDTO):void;
  findByName(name:string): Specification;
}

export {ISpecificationRepository}