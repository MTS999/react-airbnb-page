// import MainContent from "./component/MainContent";
import data from "./data.jsx"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
 
// import link from "../public/images/katie-zaferes.png"

export default function App(){
    const mts=data.map((dat1)=>
    {
        return ( <Card 
            key={dat1.id}
            dat1={dat1}
        //   img ={dat1.coverImg}
        // //   img ={link}
        // rating= {dat1.stats.rating}
        // reviewCount ={dat1.stats.reviewCount}
        // location ={dat1.location}
        // title ={dat1.title}
        // price= {dat1.price}
        // openSpots={dat1.openSpots}

        />
  );  });
    return(
        <div className="page">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {mts}
            </section>      
            
              </div>
    )
}


