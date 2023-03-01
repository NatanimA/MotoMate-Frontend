import React from 'react';


const cardetails =
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80",
        financeFee: "$129",
        purchaseFee: "$129",
        total: "$258",
        duration: "36 months",
        deposit: "$100",
        model: "BMW 3 Series",
        year: 2021,
        info: "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975."
    }


const Details = () => {
    return (
        <div>
            <div className="container">
                <div className='carimage'>
                    <img src={cardetails.image} />
                </div>
                <div className='carinfo'>
                    <h2>{cardetails.model}</h2>
                    <p>{cardetails.deposit} deposit upon any Moto Purchase</p>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <tbody>
                                            <tr className="bg-gray-100 border-b">
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Mark
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Otto
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Jacob
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Dillan
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-100 border-b">
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Mark
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Twen
                                                </td>
                                            </tr>    
                                            <tr className="bg-white border-b">
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Bob
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Dillan
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-100 border-b">
                                                <td colSpan="2" className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                    Larry the Bird
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>5.9% APR Representative</p>
                    <div className='discover'>
                        <p>Discover more about this car</p>
                        <button>spiral</button>
                        <img alt="Color Mode icon" srcSet="https://img.icons8.com/fluency/512/color-mode.png 2x, https://img.icons8.com/fluency/256/color-mode.png 1x" src="https://img.icons8.com/fluency/512/color-mode.png" style={{width: "100px", height: "100px"}}></img>
                        <button>Configure</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;


