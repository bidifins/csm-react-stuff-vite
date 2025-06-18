const HomeMid = ({ mid1data, mid2data, carddata, about1data, about2data, forwardedRef }) => {
    return (
        <div ref={forwardedRef} id="homer" className="homemid pt-40 pb-25">
            <div className="midtop text-center">
                <h1 className="text-[#115C99] font-bold text-5xl">{mid1data}</h1>
                <p className="text-gray-500 text-[16px] px-8 md:px-20 pt-5">{mid2data}</p>
            </div>

            <div className="card-container flex flex-wrap justify-center gap-6 pt-10 pb-40 px-5 md:px-20">
                {carddata.map((card) => (
                    <div className="thecard shadow-lg rounded-2xl p-6 basis-1/2 lg:basis-full max-w-md">
                        <h2 className="text-[#344767] text-xl font-semibold mb-2">{ card.title }</h2>
                        <p className="text-gray-500">{ card.desc }</p>
                    </div>
                ))}
            </div>

            <div className="midmid pt-30 pb-30 px-8 md:px-20">
                <h1 className="text-white text-3xl font-bold">{ about1data }</h1>
                <p className="text-gray-400 text-justify pt-5">{ about2data }</p>
                <button className="text-xs text-white font-semibold border-1 border-white rounded-lg px-5 py-3 mt-5" >MORE ABOUT US</button>
            </div>
        </div>
    );
};

export default HomeMid;
