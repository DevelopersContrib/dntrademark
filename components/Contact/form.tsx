import React, {useEffect} from "react";


const ContactForm = () => {
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
                    formId: 'c0310acf-635f-40ad-8184-8e91f3253e08',
                    target: '#hubspotForm_contact'
                })
            }
        });
    }, []);

    return (
        <div>
            <div id="hubspotForm_contact"></div>
        </div>
    );

}

export default ContactForm;