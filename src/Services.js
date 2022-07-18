import Card from "./Card";
import Sdata from "./data";
const Services=()=> {
    return (<>
         <div className="my-5">
          <h1 className="text-center">Our Services</h1>
         </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
               {Sdata.map((val,i)=><Card key={i} title={val.title} imgsrc={val.imgsrc}/>)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Services;
  