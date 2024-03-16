"use client";

import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
  ProductID,
  Title: existingTitle,
  Description: existingDescription,
  Price: existingPrice,
  images: existingImages,
  CategoryID: assignedCategory,
  Quantity: assignedQuantity,
}) {
  const [state, setState] = useState({
    pCategory: assignedCategory || 0,
    pName: existingTitle || "",
    pDescription: existingDescription || "",
    pPrice: existingPrice || "",
    pQuantity: assignedQuantity || "",
  });

  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories,setCategories] = useState([]);

  // const router = useRouter();
  //   useEffect(() => {
  //     axios.get("/api/categories").then((result) => {
  //       setCategories(result.data);
  //     });
  //   }, []);
  async function saveProduct(ev) {

    ev.preventDefault();

    const data = { ...state, images: images };
    
    if (ProductID) {
      //update
      await axios.put("/api/products", { ...data, ProductID });
    } else {
      //create
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }
  function updateImagesOrder(images) {
    setImages(images);
  }




  function handleChange(evt) {
    let value = evt.target.value;
    let name = evt.target.name;

    setState({ ...state, [name]: value });
  }

  return (
    <form onSubmit={saveProduct}>
      <label>Product name</label>
      <input
        type="text"
        placeholder="product name"
        value={state.pName}
        name="pName"
        onChange={handleChange}
      />
      
      <label>Photos</label>
      <div className="mb-2 flex flex-wrap gap-1">
      {images.length? 
        <ReactSortable
          list={images}
          className="flex flex-wrap gap-1"
          setList={updateImagesOrder}
        >
          {!!images?.length &&
            images.map((link) => (
              <div
                key={link}
                className="h-32 pb-1 bg-white shadow-sm rounded-sm border border-gray-200"
              >
                <img src={link} alt="" className="rounded-sm h-32 p-1 " />
              </div>
            ))}
        </ReactSortable> : <div />}
        {isUploading && (
          <div className="h-24 flex items-center">
            <Spinner />
          </div>
        )}
        <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <div>Add image</div>
          <input type="file" onChange={uploadImages} className="hidden" />
        </label>
      </div>
      <label>Description</label>
      <textarea
        placeholder="description"
        value={state.pDescription}
        name="pDescription"
        onChange={handleChange}
      />
      <label>Price (in USD)</label>
      <input
        type="number"
        placeholder="price"
        value={state.pPrice}
        name="pPrice"
        onChange={handleChange}
      />

      <label>Quantity</label>
      <input
        type="number"
        placeholder="Quantity"
        value={state.pQuantity}
        name="pQuantity"
        onChange={handleChange}
      />

      <label>Category</label>
      <select value={state.pCategory}
      name="pCategory"
                onChange={handleChange}>
          <option value="">Uncategorized</option>
          {categories.length > 0 && categories.map(c => (
            <option key={c.CategoryID} value={c.CategoryID}>{c.CategoryName}</option>
          ))}
        </select>
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
