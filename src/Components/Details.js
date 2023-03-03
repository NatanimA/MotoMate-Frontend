import React from 'react';
import { cars } from './Navbar/Carousel';
// import gear svg from fontawesome

import {FaCog, FaChevronCircleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';




const cardetails =
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80",
        financeFee: 129,
        purchaseFee: 129,
        total: 258,
        duration: 36,
        deposit: 100,
        model: "BMW 3 Series",
        year: 2021,
        info: "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975."
    }


const Details = (car) => {
    return (
        <div>
            <div className="container flex flex-col lg:flex-row mt-20 md:pl-10">
                <div className='carimage basis-2/3'>
                    <img src={car.car.image} />
                </div>
                <div className='carinfo flex flex-col ml-5 mt-5 lg:mt-0'>
                    <div className='flex flex-col items-end'>
                    <h1 className='font-extrabold tracking-wide uppercase text-5xl'>{car.car.model}</h1>
                    <p>${cardetails.deposit} deposit upon any Moto Purchase</p>
            
                                    <table className="min-w-full mt-10">
                                        <tbody>
                                            <tr className="bg-gray-100 border-b">
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Finance Fee
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                ${car.car.financeFee}
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Option to purchase fee
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    ${car.car.purchaseFee}
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-100 border-b">
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Total amount payable
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    ${car.car.total}
                                                </td>
                                            </tr>    
                                            <tr className="bg-white border-b">
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Duration
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {car.car.duration} Months
                                                </td>
                                            </tr>
                                        </tbody>
                                        <p className='font-extrabold mt-5'>5.9% APR Representative</p>
                                    </table>

                                    </div>
                               
                    
                    <div className='discover mt-5'>
                        <p className='text-right font-extrabold'>DISCOVER MORE ABOUT THE CAR</p>
                        <div className='img flex justify-center'>
                        <img alt="Color Mode icon" srcSet="https://img.icons8.com/fluency/512/color-mode.png 2x, https://img.icons8.com/fluency/256/color-mode.png 1x" src="https://img.icons8.com/fluency/512/color-mode.png" style={{width: "100px", height: "100px"}}></img>
                        </div>
                        <div className="dd flex justify-end">
                            <div className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-right flex gap-2 justify-center items-center cursor-pointer
'>
                                <FaCog className='inline' />
                                Reserve
                                <FaChevronCircleRight className='inline' />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;


