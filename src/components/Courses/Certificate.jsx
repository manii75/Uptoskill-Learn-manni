import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Certificate({courseName}) {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-gray-200">
      {/* Header Section */}
      <div className="w-full max-w-3xl p-4 border border-gray-300 shadow-md bg-white text-left mx-auto">
        <h1 className="text-4xl font-bold px-6 py-4 flex items-center capitalize  ">
          {courseName}
          <FontAwesomeIcon icon={faChevronDown} className="text-black text-3xl ml-80" />
        </h1>
      </div>
      
      {/* Main Content Section */}
      <div className="bg-white max-w-3xl w-full mt-24 p-6">
        <div className="flex flex-col items-center text-center">
          <img 
            className="mt-11 mb-6" 
            src="https://blob.sololearn.com/web-assets/CertificateDisabled.png" 
            alt="Certificate Disabled" 
          />
          <h2 className="text-2xl font-semibold mb-4">Your Certificate is close</h2>
          <p className="text-gray-700 mb-6">
            You are doing great! Keep learning to unlock your certificate!
          </p>
          <button 
            className="px-6 py-3 mb-10 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Claim Certificate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
