import { useState, useRef, useEffect } from 'react'
import Nav from './Navbar'
import HomeTop from './HomeTop'
import HomeMid from './HomeMid';
import HomeBottom from './HomeBottom';
import Footer from './Footer';

function App() {
  // Dummy Data (god i need to move this)
  const [navi, setNavi] = useState([
    { navilink: '/', naviname: 'Home'},
    { 
      navilink: '', 
      naviname: 'Services v',
      children: [
        { name: "Development", link: "/" },
        { name: "ERP Solution", link: "" },
        { name: "Backup & Recovery Solutions", link: "" },
        { name: "Data Analytics, Business Intelligence & Big Data", link: "" },
        { name: "Other Product Solutions", link: "" }
      ]
    },
    { navilink: '/', naviname: 'About'},
    { navilink: '/', naviname: 'Client'}
  ]);

  const [socialmed, setSocialMed] = useState([
    { sociallink: '/', socialname: 'T'},
    { sociallink: '/', socialname: 'F'},
    { sociallink: '/', socialname: 'C'},
    { sociallink: '/', socialname: 'B'},
    { sociallink: '/', socialname: 'A'}
  ]);

  const [services, setServices] = useState([
    { link: '/', name: 'Development' },
    { link: '/', name: 'ERP Solution' },
    { link: '/', name: 'Backup & Recovery Solutions' },
    { link: '/', name: 'Data Analytics, Business Intelligence & Big Data' },
    { link: '/', name: 'Other Product Solutions' },
  ]);

  //h
  const [topimage, setTopimage] = useState('https://i.imgur.com/vhRGlAZh.jpg')

  const top1 = [
    'Showing the development of FPS in the field of consulting that has innovative services to prioritize', 
    'Providing solutions to your business problems with efficient and innovative technologies', 
    'Delivering IT Solutions That Enable Your Company to Work Smarter, Easier, And Simpler', 
    "Maximizing your company's potential with rich and valuable data insight"
  ];
  const [top2, setTop2] = useState("We see ourselves as an enabler, making your business simpler and more competitive.");

  const [mid1, setMid1] = useState("Our Focus Solution");
  const [mid2, setMid2] = useState("Delivering experiences that are useful, usable, desirable, and different will create demand for your brand and please your customers. To deliver experiences that fit your company's needs,");

  const [card, setCard] = useState([
    {icon: "", title: "Development", desc: "Our focus in providing a creative way of delivering a system is a robust user experience and rich user interface."},
    {icon: "", title: "Design", desc: "We emphasize clean, modern visuals with usability at the core of every UI we design."},
    {icon: "", title: "Support", desc: "Reliable ongoing assistance and maintenance ensures your product performs at its best."},
    {icon: "", title: "Backup & Recovery Solutions", desc: "We offer a variety of backup and recovery solutions to meet modern business needs."},
    {icon: "", title: "Other Product Solutions", desc: "We offer a variety of product solutions to help you grow and improve your business according to your goals."}
  ]);

  const [client, setClient] = useState([
    {hi:"twitter"},
    {hi:"facebook"},
    {hi:"maybeidk"},
    {hi:"still working on this"},
    {hi:"mitsubishi"},
  ]);

  const [about1, setAbout1] = useState("About Us");
  const [about2, setAbout2] = useState("PT 4Net Prima Solusi (FPS) is a consulting company that provides IT solutions for various industries with the aim of helping you grow your business and achieve your goals amidst market changes and increasing competitiveness. We use the right approach to integrate software-based services or components into the workflow of your organizational structure. Our company is focused on delivering IT solutions to organizations across various industries. Our goal is to help you grow and develop your business in accordance with your goals, even in times of changing markets and increasing competitive pressure.");

  // const [phoner, setPhoner] = useState([
  //   {link: "https://www.roblox.com/users/108133092/profile", phone:"+62 821-2353-6558"}
  // ]);
  const [contactphone, setContactphone] = useState("+62 821-2353-6558");
  const [contactemail, setContactemail] = useState("info@4netps.co.id");

  const [locateoffice, setLocateoffice] = useState("Cyber 2 Tower Jl. H. R. Rasuna Said Blok x-5, 18th Floor Kuningan, Jakarta Selatan 12950");
  const [locatews, setLocatews] = useState("Ruko Permata Depok Regency Blok A1 Nomor 1 Kelurahan Ratu Jaya Kecamatan Cipayung Depok, Jawa Barat");

  //Anything else

  // change the top text every ssssssssssssssssss
  const [topdisplay, setTopdisplay] = useState("Maximizing your company's potential with rich and valuable data insight");
  const [currenttop, setCurrenttop] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrenttop((prevIndex) => (prevIndex + 1) % top1.length);
      setTopdisplay(top1[currenttop]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currenttop, top1]);

  // top button scroll thing
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Nav socialdata={socialmed} navidata={navi} />
      <HomeTop onScrollClick={scrollToTarget} topdata={topdisplay} top2data={top2} imagedata={ topimage } />
      <HomeMid forwardedRef={targetRef} mid1data={ mid1 } mid2data={ mid2 } carddata={ card } about1data={ about1 } about2data={ about2 }/>
      <HomeBottom clientdata={ client } />
      <Footer socialdata={socialmed} servicedata={services} phonedata={contactphone} emaildata={contactemail} officedata={locateoffice} wsdata={locatews} />
    </div>
  )
}

export default App
