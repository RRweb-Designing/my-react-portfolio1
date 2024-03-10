
function Signup() {
    return (

        <>
            <section className="section5">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">   
                   </div>
                        <div className="col-sm-4 ">     
                           <form className="mt-5">
                <h1 className="mt-5"><u>Signup..</u></h1>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label> Your Email</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="row">
                        <div className="col-6 form-group ">
                            <label> Your Password</label>
                            <input type="email" className="form-control"/> 
                        </div>
                        <div className="col-6 form-group ">
                            <label> Re Enter</label>
                            <input type="text" className="form-control"/> 
                        </div>
                    </div>
                <br/>
                    <div className="form-group">
                        <label></label>
                        <button className="btn btn-info btn-block">Submit</button>
                    </div>
                </form> </div>
                    </div>
                </div>

            </section>
        </>

    )
}
export default Signup