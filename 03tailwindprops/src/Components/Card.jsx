import React from 'react';
function Card({subject, sequence, btnText, UT, USN, Loogo}) {
  return (
    <div className="relative max-w-lg p-10 border bg-black border-gray-100 shadow-xl rounded-xl">
            <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
              {UT} University
            </span>
            <img className="absolute left-4 top-4" src={Loogo} alt="NO Img" />
            <button className="mt-3">
                For more {btnText}
            </button>

            <div className="m-5 text-gray-200 sm:pr-8">
                <h3 className="mt-2 text-sm" >Welcome to Science subject : {subject} </h3>
                <h5 className="mt-4 text-xl font-bold text-gray-300"> PUC Science {sequence} subject </h5>
                <h4 className="mt-4 text-xl font-bold text-gray-300"> Student RegIster Number : {USN} </h4>
            </div>
        </div>
  )
}

export default Card;