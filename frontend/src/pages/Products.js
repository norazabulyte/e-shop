import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(resp => {
        setData(resp.data);
      })
  }, []);

  return (
    <>
      <h1>Naujausi produkta</h1>
      <div className="row">
        {data.map(product => (
          <div className="col-4" key={product.id}>
            <img
              src={product.photo}
              alt={product.name}
            />
            <h4>{product.name}</h4>
          </div>
        ))}
      </div>
      </>
  );
}

export default Products;
