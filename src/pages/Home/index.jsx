import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getAllProducts } from "../../api/getAllProducts";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/cart-context";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductByCategory } from "../../utils/getProductByCategory";

function Home() {
  const { cart } = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");

  useEffect(() => {
    (async () => {
      const product = await getAllProducts();
      const categorie = await getAllCategories();
      const updatedCategories = [...categorie,{id:"1a",name:"All"}]
      setCategories(updatedCategories);
      setProducts(product);
    })();
  }, []);

  const oncategoryClick=(category)=>{
    setSelectedCategories(category);
  }

  const filterByCategories = getProductByCategory(products, selectedCategories);

  return (
    <>
      <Navbar />
      <main className="pt-8">
        <div className="flex gap-4 justify-center bg-green-400" style={{padding:"0px 16px" , height:"30px"}}>
          {categories.length > 0 &&
            categories.map((category) => (
            <div className="bg-green-400 font-semibold rounded-lg hover:cursor-pointer text-nowrap hover:border" style={{padding:"0px 16px" }} onClick={()=>oncategoryClick(category.name)}>{category.name}</div>
            ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {filterByCategories.length > 0 ?
            filterByCategories.map((product) => (
              <ProductCard key={product._id} product={product} />
            )) : <h2 className="text-gray-500 text-1xl p-2">No Product found. Try with another category</h2>}
        </div>
      </main>
    </>
  );
}
export default Home;
 