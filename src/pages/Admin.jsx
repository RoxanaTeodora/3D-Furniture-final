import React from "react";

const Admin = () => {
  return (
    <div className="p-10">
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            className="form-control p-2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black "
            type="text"
            id="price"
          />
        </div>
        <div>
          <label htmlFor="descrption">Descrption</label>
          <input
            className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
            type="text"
            id="description"
          />
        </div>
        <button className="">Save</button>
      </div>
    </div>
  );
};

export default Admin;
