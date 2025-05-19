import {useState , Fragment, useEffect} from "react"
import ProductCard from "../components/Productcard";
import { useSearchParams } from "react-router-dom";

export default function Home()
{
    const [Product,setProduct ]= useState([]);
    const[searchparams,setsearchParams]= useSearchParams();
    useEffect(()=>
    {
        fetch(process.env.REACT_APP_API_URL +'/product?'+ searchparams) //same url in backend
        .then(res => res.json())
        .then(res => setProduct(res.products)) //controller la iruka product
    },[searchparams])
    return(
        <Fragment>
        <h1 id="products_heading">Latest Products</h1>
           <section id="products" className="container mt-5">
          <div className="row">
          {Product.map(pro =>
           <ProductCard pro={pro} />
            )
          }
    
                     
          </div>
        </section>
        </Fragment>
    )
}