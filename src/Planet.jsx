import React, { useState, useEffect } from 'react';
import Company from './components/Company';
import Globe from 'react-globe.gl';
import { API } from "../config/CompanyAPI";
import autoprefixer from 'autoprefixer';

export default function Planet() {
    const [places, setPlaces] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedMarkerId, setSelectedMarkerId] = useState(null)
    const [isCompanyVisible, setCompanyVisible] = useState(false);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        try {
            API.get("/companies?size=50").then((response) => {
                setPlaces(response.data.companies);
            });
        } catch (error) {
            error.response.message;
        }
    }, []);

    let markerSvg = `
    <div>
        <svg viewBox="-4 0 36 36">
        <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
        <circle fill="#C6C5E6" cx="14" cy="14" r="7"></circle>
        </svg>
    </div>
    `;

    const gData = places.map((company, index) => ({
        id: company.id,
        //page content data
        name: company.name,
        logo: company.logo,
        domain: company.domain,
        city: company.city,
        country: company.country,
        revenue: company.revenue,
        industryMain: company.industryMain,
        founded: company.yearFounded,
        workers: company.totalEmployeesExact,
        description: company.description,
        facebook: company.socialNetworks.facebook,
        linkedin: company.socialNetworks.linkedin,
        instagram: company.socialNetworks.instagram,
        //loaction used for marker location
        lat: company.city.latitude,
        lng: company.city.longitude,
        //styles
        color: '#5856B5', // default marker color
        color2: '#080913', //active marker color
        size: 20, //default marker size
        //activation for marker
        isSelected: selectedMarkerId === company.id, // Check if the company is selected
    }));
    const handleLabelClick = (html, company) => {
        setSelectedCompany({ company: company, html: html });
        setSelectedMarkerId(company.id);
        setCompanyVisible(true);
        // Scroll to the Company component
        const companyElement = document.getElementById('company-component');
        companyElement.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleResize = () => {
          const windowWidth = window.innerWidth -50;
          const windowHeight = window.innerHeight -100;

          // Perform calculations to determine the desired box size
          // For example:

          // Update the box size state with the calculated dimensions
          setBoxSize({ width: windowWidth, height: windowHeight });
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call the handleResize function once to set the initial box size
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    return <>
        <div className="flex justify-center">
            <div>
                <Globe
                    hexMargin={autoprefixer}
                    width={boxSize.width}
                    height={boxSize.height}
                    animateIn="true"
                    backgroundColor="#080913"
                    globeImageUrl="/earthcolormap.png"
                    htmlElementsData={gData}
                    htmlElement={d => {
                        const el = document.createElement('div');
                        el.innerHTML = markerSvg;
                        el.style.width = d.isSelected ? `30px` : `${d.size}px`;
                        el.style['pointer-events'] = 'auto';
                        el.style.cursor = 'pointer';
                        el.style.color = d.isSelected ? d.color2 : d.color;
                        // kasuta el et muuta colorit style.coloriga
                        el.addEventListener('mouseover', () => {
                            // Create a tooltip element
                            const tooltip = document.createElement('div');
                            tooltip.innerText = d.name;
                            tooltip.style.position = 'absolute';
                            tooltip.style.top = `${event.clientY}px`;
                            tooltip.style.left = `${event.clientX}px`;
                            tooltip.style.backgroundColor = '#101226';
                            tooltip.style.color = '#5856B5';
                            tooltip.style.padding = '10px';
                            tooltip.style.border = '1px solid black';
                            tooltip.style.borderRadius = '5px';
                            tooltip.style.zIndex = '100';

                            // Add the tooltip to the document
                            document.body.appendChild(tooltip);

                            // Remove the tooltip when the mouse moves out of the marker element
                            el.addEventListener('mouseout', () => {
                                tooltip.remove();
                            });
                            // Remove the tooltip when the marker element is clicked
                            el.addEventListener('click', () => {
                                tooltip.remove();
                            });
                        });
                        el.onclick = (e) => handleLabelClick(el, d);
                            return el;
                    }}
                />
                {isCompanyVisible && (
                    <div id="company-component">
                        <Company html={selectedCompany.html} company={selectedCompany.company} />
                    </div>
                )}
            </div>
        </div>
    </>
};
