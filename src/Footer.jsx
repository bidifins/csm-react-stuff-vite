import navlogo from './assets/images/fps-icon.svg';

const Footer = ( { socialdata, servicedata, phonedata, emaildata, officedata, wsdata } ) => {
    return ( 
        <div className="footer">
            <div className="foot1">
                <div>
                    <img className='w-[150px]' src={ navlogo } alt="hi" />
                    <div><p className='text-[#272d4c] font-bold mt-4 mb-3'>PT 4Net Prima Solusi</p></div>
                    <div><p className='text-[#363e6a] mb-1'>Social</p></div>
                    <div className='social'>
                        {socialdata.map((social) => (
                            <a href={ social.sociallink } className="hover:text-indigo-600">{ social.socialname }</a>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="footine">Services</p>
                    {servicedata.map((service) => (
                        <div><a className="footin" href={service.link}>{service.name}</a></div>
                    ))}
                </div>
                <div>
                    <p className="footine">Contact Us</p>
                    <div><a className="footin" href="/">{phonedata}</a></div>
                    <div><a className="footin" href="/">{emaildata}</a></div>
                </div>  
                <div>
                    <p className="footine">Head Office</p>
                    <a className="footin" href="/">{officedata}</a>
                </div>
                <div>
                    <p className="footine">Workshop</p>
                    <a className="footin" href="/">{wsdata}</a>
                </div>
            </div>
            <div className="foot2 my-20 text-sm text-center text-[#67748e]">All rights reserved. Copyright © 2025 PT 4Net Prima Solusi.</div>
        </div>
     );
}
 
export default Footer;