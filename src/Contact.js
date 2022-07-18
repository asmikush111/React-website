import {useState} from 'react';

const Contact=()=> {

  const [data,setData]=useState({
    name:'',
    phone:'',
    email:'',
    phone:'',
    msg:''
  });

  const InputHandler=(event)=>{
    const {name,value}=event.target;
    setData({
      ...data,
      [name]:value,
     } );
  }

  const formSubmit=(e)=>{
     e.preventDefault();
     alert(`${data.name} ${data.phone} ${data.phone} ${data.email} ${data.msg}`);
  }

return (<>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input type="text" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="Enter your name"
              name="name"
              value={data.name}
              onChange={InputHandler}/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input type="email" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="Enter your email"
              name="email"
              value={data.email}
              onChange={InputHandler}/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input type="emailnumber" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="Enter phone no"
              name="phone"
              value={data.phone}
              onChange={InputHandler}/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3"
              placeholder="Enter message"
              name="msg"              
              value={data.msg}
              onChange={InputHandler}
              ></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">
                Submit Form
              </button>
            </div>
           </form>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Contact;
  