function Contact(){
    return(
     <>
     
     <section  className="section3">
        <div className="">
        <div className="container-fluid">
        <div className="row">
            <div className="col-sm-4"></div>
            
            <div className="col-sm-4">
                <h1 className="mt-2"><u><b>Contact Me</b></u></h1>
                 <form>
                    <div className="form-group fw-bold">
                        <label>Your Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group fw-bold">
                        <label> Your Email</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="row">
                        <div className="col-6 form-group fw-bold">
                            <label> Your Number</label>
                            <input type="email" className="form-control"/> 
                        </div>
                        <div className="col-6 form-group fw-bold ">
                            <label> What's App Number</label>
                            <input type="text" className="form-control"/> 
                        </div>
                    </div>
                    <div className="form-group fw-bold">
                        <label>City</label>
                        <select className="form-control">
                            <option>lucknow</option>
                            <option>kanpur</option>
                            <option>Fatehput</option>
                        </select>
                    </div>
                    <div className="form-group fw-bold">
                        <label for="address">Address</label>
                        <textarea className="form-control"></textarea>
                    </div>
                   <br/>
                    <div className="form-group fw-bold">
                        <label></label>
                        <button className="btn btn-info btn-block">Submit</button>
                    </div>
                </form></div>
                <div className="col-sm-4"> </div>

        </div>
    </div>
        </div>
       </section>
     </>   
    )
}

export default Contact