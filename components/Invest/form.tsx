import React, {useEffect} from "react";


const HubspotInvestForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '42816889',
                    formId: '804ff462-aa4f-4213-97c9-874eda1d90fa',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        
            <div id="hubspotForm"></div>
       
    );

}

export default HubspotInvestForm;