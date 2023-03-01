import React, {useState} from 'react';

import { Link, useHistory } from 'react-router-dom';

const Signup = () => {

    const [details, setDetails] = useState({firstname: "", lastname: "", username: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails({...details, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
    }
    return (
<div className="grid min-h-screen place-items-center">
  <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 className="text-xl font-semibold">Hello there ?, <span className="font-normal">please fill in your information to continue</span></h1>
    <form className="mt-6">
      <div className="flex justify-between gap-3">
        <span className="w-1/2">
          <label htmlFor="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
          <input id="firstname" type="text" name="firstname" placeholder="John" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={details.firstname} onChange={handleChange} required />
        </span>
        <span className="w-1/2">
          <label htmlFor="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
        <input id="lastname" type="text" name="lastname" placeholder="Doe" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={details.lastname} onChange={handleChange} required />
        </span>
      </div>
      <label htmlFor="username" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Username</label>
      <input id="username" type="text" name="username" placeholder="username" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={details.username} onChange={handleChange} required />
      <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Sign Up
      </button>
      <Link to='/signin' className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</Link>
    </form>
  </div>
</div>
    )
}

export default Signup;