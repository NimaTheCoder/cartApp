import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import Navbar from "./Navbar";

const imgStyle = {
  width: "200px", // Adjust width as needed
  height: "200px", // Maintain aspect ratio
  // borderRadius: '50%', // Make the image round (for example)
  border: "2px solid #ccc", // Add a border
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add a shadow
};

const containerStyle = {
  display: "flex",
  flexDirection: "row", // Optional: Set flex direction (default is 'row')
  justifyContent: "center", // Optional: Align items horizontally
  alignItems: "center", // Optional: Align items vertically
  // height: "100vh", // Example height
  backgroundColor: "#f0f0f0", // Example background color
  flexWrap: "wrap",
};
const ApiDataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  return (
    <div>
      {/* <Navbar /> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div style={containerStyle}>
        {data.map((item) => (
          <div key={item.id}>
            <img style={imgStyle} src={item.image} alt="img" />

            <li>
              {item.category} - {item.price}
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiDataFetcher;
