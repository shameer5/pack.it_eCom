import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Confirmation = ({shippingData}) => {
    let history = useHistory()
    const order = useSelector((state)=> state.checkout.order)

    return (
        <>
            {order ? (
            <main className="bg-gray-200 shadow-custom rounded-lg font-poppins m-5 max-w-5xl">
             <div className="p-10">
                <h1 className='text-center font-semibold uppercase text-xl mb-5'>{`${shippingData.firstName}`}</h1>
                <h1 className='text-center mb-2'>Your order has been successfully placed !</h1>
                <div className="flex justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-36 w-36" viewBox="0 0 20 20" fill="#059669">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <h1 className='text-center mb-4'>Order ID: {`${order.id}`}</h1>
                <div className='flex justify-center'>
                <button className="rounded-full border-2 p-2 border-new-100 tracking-wider hover:bg-transparent bg-new-100 hover:text-black text-white"
                onClick={()=> history.push('/')}>Return to home</button>
                </div>
             </div>
            </main>)
            : (
                <div className=" mt-0 grid h-100 items-center justify-center">
                 <svg class="animate-spin ml-1 mr-3 h-10 w-10 text-new-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                 </svg>
                </div>
            )}
        </>
    )
}

export default Confirmation
