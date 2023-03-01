import React, {useState} from 'react';

const AddItem = () => {

    const [details, setDetails] = useState({
        model: "",
        year: "",
        price: "",
        engine: "",
        fueltype: "",
        imageurl: "",
        description: ""
    })

    const handleChange = (e) => {

        const {name, value} = e.target;

        setDetails({...details, [name]: value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
        setDetails({
            model: "",
            year: "",
            price: "",
            engine: "",
            fueltype: "",
            imageurl: "",
            description: ""
        })
    }

    return (
        <div className="add-item">
        <div className="grid min-h-screen place-items-center">
  <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 className="text-xl font-semibold">Hello there ?, <span className="font-normal">please fill in the new car item and continue.</span></h1>
    <form className="mt-6" onSubmit={handleSubmit}>
      <label htmlFor="model" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Car Model</label>
      <input id="model" type="text" name="model" placeholder="Car Model" autoComplete="model" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={details.model} onChange={handleChange} required />
      <label htmlFor="year" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Model year</label>
      <input id="year" type="text" name="year" placeholder="Model Year" autoComplete="model" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} value={details.year} required />
      <label htmlFor="price" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Price</label>
      <input id="price" type="number" name="price" placeholder="Car Price" autoComplete="model" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} value={details.price} required />
      <label htmlFor="engine" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Engine Type</label>
      <input id="engine" type="text" name="engine" placeholder="Engine Type" autoComplete="model" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} value={details.engine} required />
      <label htmlFor="fueltype" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Fuel Type</label>
      <input id="fueltype" type="text" name="fueltype" placeholder="Fuel Type" autoComplete="model" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} value={details.fueltype} required />
      <label htmlFor="image" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Car Image url source</label>
      <input id="image" type="text" name="imageurl" placeholder="image URL" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} value={details.imageurl} required />
      <div className="col-span-2">
        <label htmlFor="description" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Description</label>
      <textarea cols="30" rows="4" name='description' id='description' className="resize-none block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={handleChange} value={details.description} placeholder="Car Description"></textarea>
    </div>
      <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Add new car
      </button>
    </form>
  </div>
</div>
        </div>
    );
    }

export default AddItem;