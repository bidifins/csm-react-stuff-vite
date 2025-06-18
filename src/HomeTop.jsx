const HomeTop = ({ topdata, top2data, imagedata, onScrollClick }) => {
    return ( 
        <div className="hometop pb-20" style={{backgroundImage: 'url(${imagedata})'}}>
            <div className="zindex">
                <p className="font-bold text-center text-5xl px-70 pt-35 pb-5 max-lg:px-25 max-md:px-15 max-md:text-4xl">{ topdata }</p>
                <p className="text-center text-xl px-75 max-lg:px-30 max-md:px-20 pb-10">{ top2data }</p>
                <div className="flex justify-center">
                    <button className="text-[#115C99] shadow-md bg-white hover:bg-gray-300 rounded-full w-15 h-15" onClick={onScrollClick}>v</button>
                </div>
            </div>
        </div>
     );
}
 
export default HomeTop;