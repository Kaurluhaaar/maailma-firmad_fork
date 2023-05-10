import{ Link }from "react-router-dom"

function Company({ company, onClick }) {
    const handleClick = () => {
        onClick(company); // Pass the clicked company as an argument to the onClick callback
      };

    return (
        <>
        <div className="w-min m-10">
            <div className="pl-5 w-200">
                <a href={`https://${company.domain}`}>
                <div className="text-morning-blue font-nunito text-5xl font-light pb-8 pl-8">{company.name}</div>
                </a>
                
                <div className="flex space-x-6 pl-8 pb-5">
                    <div className="w-max font-nunito font-normal bg-button-blue text-morning-blue flex pl-2 pr-2 p-1 rounded-lg">Founded <span className="pl-4 text-text-blue">{company.founded}</span></div>
                    <div className="w-max font-nunito font-normal bg-button-blue text-morning-blue flex pl-2 pr-2 p-1 rounded-lg">Workers <span className="pl-4 text-text-blue">{company.workers}</span></div>
                    <div className=" w-max font-nunito font-normal bg-button-blue text-morning-blue flex pl-2 pr-2 p-1 rounded-lg">{company.industryMain}</div>
                </div>
                <div className="flex max-w-full">
                    <div className="w-5 h-100 bg-gradient-to-b from-morning-blue to-space-blue"></div>
                    <div className="text-text-blue h-80 pt-5 pl-8 pb-16 pr-5 overflow-y-auto">{company.description}</div>
                </div>
            </div>
        </div>
        </>
    )
  }

  export default Company
