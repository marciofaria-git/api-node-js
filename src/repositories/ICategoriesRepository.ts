import { Category } from "../model/Category";

interface ICategoriesRepository{
  findByname(name:string):Category;
  list():Category[];
  create(name:string, description:string): void;
}

export {ICategoriesRepository}