import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

const Signin = () => {

    const [username, setUsername] = useState("");

    const handleChange = (e) => {
        setUsername(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        setUsername("")
    }

    return (
<div className="grid min-h-screen place-items-center">
  <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 className="text-xl font-semibold">Hello there ?, <span className="font-normal">please fill in your information to sign in</span></h1>
    <form onSubmit={handleSubmit} className="mt-6">
      <label htmlFor="username" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Username</label>
      <input id="username" type="text" name="username" placeholder="username" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={username} onChange={handleChange} required />
      <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Sign In
      </button>
      <Link to='/signup' className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Not Signup yet?</Link>
    </form>
  </div>
</div>
    )
}

export default Signin;
