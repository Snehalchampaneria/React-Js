import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Form, style } from "react-bootstrap";
import Products from "./ProductsLayout";
import custom from "./custom.module.css";
import ProductsLayout from "./ProductsLayout";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


export default function Home() {

    return (
        <Carousel variant="dark" className="fluid">
            <Carousel.Item interval={2000} >
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "photo4.jpg"}
                    alt="..."
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "photo5.jpg"}
                    alt="..."
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "photo6.jpg"}
                    alt="..."
                />
            </Carousel.Item>
        </Carousel>
    );
}




//     const [products, setProducts] = useState("")

//     useEffect(() => {
//         getProducts()
//     }, [products])

//     const getProducts = () => {
//         fetch('http://localhost:3001/products')
//             .then(res => res.json())
//             .then(json => setProducts(json))
//     }

//     return (
//         <>

//             <div className="container">
//                 <div className="row mt-5">

//                     {
//                         products && products.map((p) =>
//                             <ProductsLayout title={p.title} />
//                         )
//                     }
//                 </div>
//             </div>

//         </>

//     // return (
//     //     <section className={`${custom.home}`}>
//     //         <div className={`${custom.content}`}>
//     //             <h3>much and more<br />than perfume</h3>
//     //             <a href='#' className={`${custom.btn}`}>Get yours now</a>
//     //         </div>
//     //     </section>
//      );

// }