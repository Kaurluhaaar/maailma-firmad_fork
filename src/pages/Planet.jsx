import React, { useState, useEffect } from 'react';
import Company from '../components/Company';
import Globe from 'react-globe.gl';
import { API } from "../../config/CompanyAPI";

export default function Planet() {
    const [places, setPlaces] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedMarkerId, setSelectedMarkerId] = useState(null)
    const [isCompanyVisible, setCompanyVisible] = useState(false);

    const [initialLat, setInitialLat] = useState(0);
    const [initialLng, setInitialLng] = useState(0);

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

    //country
    const gData = places.map((company, index) => ({
        id: company.id,
        //page content data
        name: company.name,
        logo: company.logo,
        domain: company.domain,
        city: company.city,
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
         // Pan the view to the marker
        const markerElement = e.target.parentElement;
        const globeElement = globeRef.current;
        globeElement.panTo(markerElement.dataset.lat, markerElement.dataset.lng, 0.8);
    };
    return <>
        <div className="h-screen w-full">
            <div>
                <Globe
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
                        el.onclick = (e) => handleLabelClick(el, d,);
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
