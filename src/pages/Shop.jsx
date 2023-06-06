import React, {useEffect, useState} from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap';
import '../Styles/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {

const [productsData, setProductsData] = useState(products)

// const priceFilter = (e) => {
//   const filterV = e.target.value;

//   if (filterV === 'ascending') {
//     const filteredProducts1 = products.sort(
//       (a,b) => {  return( a.price - b.price)
//       });
//     setProductsData(filteredProducts1);
//     console.log(filteredProducts1)
//   }
// }


const handleFilter = (e) => {
  const filterValue = e.target.value;

    if(filterValue === 'sofa'){
      const filteredProducts = products.filter(
        (item) => item.category.includes("sofa")
      );
      setProductsData(filteredProducts);
    };

    if(filterValue === 'mobile'){
      const filteredProducts = products.filter(
        (item) => item.category.includes("mobile")
      );
      setProductsData(filteredProducts);
    };

    if(filterValue === 'chair'){
      const filteredProducts = products.filter(
        (item) => item.category.includes("chair")
        );
        setProductsData(filteredProducts);
      };

    if(filterValue === 'watch'){
      const filteredProducts = products.filter(
        (item) => item.category.includes("watch")
      );
      setProductsData(filteredProducts);
    };

    if(filterValue === 'wireless'){
      const filteredProducts = products.filter(
        (item) => item.category.includes("wireless")
      );
      setProductsData(filteredProducts);
    };

    if (filterValue === 'ascending') {
    const filteredProducts = products.sort(
      (a,b) =>  a.price - b.price
      );
    setProductsData([...filteredProducts]);
    console.log(filteredProducts)
    };
}

useEffect(() => {
  console.log('filter:', productsData)
},[productsData])

  const handleSearch = (e) => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  return (
    <Helmet title="Shop">
    <CommonSection title="Products"/>

    <section>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
              <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='6' className=''>
          <div className="filter__widget">
              <select onChange={handleFilter}>
              <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg='6' md='12'>
            <div className="search__box">
              <input type="text" placeholder='Search......' onChange={handleSearch}/>
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length === 0? <h1 className='text-center fs-4'>No products are found!</h1> : <ProductsList data={productsData}/>
              // <ProductsList data={productsData}/>
          }
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Shop