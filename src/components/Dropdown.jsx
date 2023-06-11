import React, { useState } from 'react';

export default function Dropdown({ companies, handleCompanyClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center mt-8 z-50">
      <div className="relative z-10">
        <button
          onClick={toggleDropdown}
          className={`bg-button-blue text-morning-blue py-2 px-4 rounded-md w-48 ${
            dropdownOpen ? 'shadow-[0_0px_5px_3px_rgba(88,86,181,0.3)]' : ''
          }`}
        >
          companies
        </button>
        {dropdownOpen && (
          <ul className="z-50 absolute left-0 mt-2 w-200 bg-button-blue rounded-md shadow-lg grid place-items-center grid-cols-5 gap-4">
            {companies.map((company) => (
              <li
                key={company.id}
                className="py-2 w-full px-4 cursor-pointer text-morning-blue hover:bg-morning-blue hover:text-button-blue text-center"
                onClick={() => handleCompanyClick(company)}
              >
                {company.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
