import React, { useState } from 'react';

export default function Dropdown({ companies, handleCompanyClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="absolute top-0 left-10 flex flex-col items-center mt-8 z-50">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className={`bg-button-blue text-morning-blue py-2 px-4 rounded-md w-48 ${
            dropdownOpen ? 'shadow-[0_0px_5px_3px_rgba(88,86,181,0.3)]' : ''
          }`}
        >
          companies
        </button>
        {dropdownOpen && (
          <ul className="overflow-scroll z-50 absolute left-0 mt-6 w-80 h-600 bg-button-blue rounded-md grid gap-2 place-items-center shadow-[0_0px_5px_3px_rgba(88,86,181,0.3)]">
            {companies.map((company) => (
              <li
                key={company.id}
                className="flex gap-4 transition ease-in-out duration-500 py-2 w-full h-full px-4 cursor-pointer text-morning-blue hover:bg-morning-blue hover:text-button-blue"
                onClick={() => handleCompanyClick(company)}
              >
                <img src={company.logo} alt="logo" className="w-6 h-6 rounded" />
                {company.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
