
import { categories } from "../../data";
import {Container} from "./CategoriesStyles";
import CategoryItem from "../CategoryItem/CategoryItem";



const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem {...item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
