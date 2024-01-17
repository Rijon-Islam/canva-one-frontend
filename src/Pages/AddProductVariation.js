import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddProductVariation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const[variation, setvariation] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product-variation/${id}`)
      .then((res) => res.json())
      .then((info) => setvariation(info));
  }, [id]);

  const handleVariation = (event) => {
    event.preventDefault();

    const variationValue = event.target.variationValue.value;

    const variation = {
      variationValue: [],
    };

    variation.variationValue.push(variationValue);

    const url = `http://localhost:5000/add-variation/${variation._id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(variation),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate('/admin/dashboard');
      });
  };

  return (
    <div>
        You are Changing {variation._id}
      <form onSubmit={handleVariation}>
        <input type='text' placeholder='32 inch' name='variationValue'></input>
        <input type='submit' value='Add'></input>
      </form>
    </div>
  );
};

export default AddProductVariation;
