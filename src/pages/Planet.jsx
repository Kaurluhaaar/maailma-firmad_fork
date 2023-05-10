import React, { useState, useEffect } from 'react';
import Company from '../components/Company';
import Globe from 'react-globe.gl';
import { API } from "../../config/API";

const World = () => {
    const [places, setPlaces] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [width, setwidth] = useState(window.innerWidth);

    const handleLabelClick = (html, company) => {
        // const path = html.explicitOriginalTarget
        // const pathElements = path.querySelectorAll('path');
        setwidth(800);
        setSelectedCompany(company);
        html.target.setAttribute('fill', '#00FF00');
       console.log(html.target);
    };

    console.log(places);

    useEffect(() => {
        try {
            API.get("/companies?size=50").then((response) => {
                setPlaces(response.data.companies);
            });
        } catch (error) {
            error.response.message;
        }
    }, []);

    const markerSvg = `
    <div>
    <svg viewBox="-4 0 36 36">
    <path fill="#5856B5" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="#C6C5E6" cx="14" cy="14" r="7"></circle>
    </svg>
    `;


    const gData = places.map((company, index) => ({
        name: company.name,
        logo: company.logo,
        domain: company.domain,
        industryMain: company.industryMain,
        founded: company.yearFounded,
        workers: company.totalEmployeesExact,
        description: company.description,
        lat: company.city.latitude,
        lng: company.city.longitude,
        size: 20,
    }));

    return <>
        <div className="flex h-screen w-full">
            <Globe
                width={width}
                animateIn="false"
                backgroundColor="#080913"
                globeImageUrl="/earthcolormap.png"
                htmlElementsData={gData}
                htmlElement={d => {
                    const el = document.createElement('div');
                    el.innerHTML = markerSvg;
                    el.style.width = `${d.size}px`;
                    el.style['pointer-events'] = 'auto';
                    el.style.cursor = 'pointer';
                    el.onclick = (e) => handleLabelClick(e, d);
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
            {selectedCompany && <Company company={selectedCompany} />}
        </div>
    </>
};

function Planet() {
    return (
        <>
            <World />
        </>
    )
}

export default Planet
