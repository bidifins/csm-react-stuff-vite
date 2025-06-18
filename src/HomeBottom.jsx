import Slider from 'react-slick';

const HomeBottom = ({ clientdata }) => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
    };

    return ( 
        <div className="homebot pb-30">
            <div className="clientour text-center">
                <h1 className="text-[#115C99] font-bold text-4xl">Our Client</h1>
                <div className='clientslide'>   
                    <Slider {...settings}>
                        {clientdata.map((client) => (
                            <div className="client1">
                                <h1>{ client.hi }</h1>
                            </div>
                        ))}
                    </Slider>
                </div>
                <button className="text-xs text-[#115C99] font-semibold border-1 border-[#115C99] rounded-lg px-5 py-3" >SEE MORE</button>
            </div>
        </div>
     );
}

export default HomeBottom;