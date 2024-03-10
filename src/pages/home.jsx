function Home ()
{
    return(
        <>
        
          
       <section className="section1">
 
        <div className="" >
             <p className=""> Hi I am Rehan</p>
             <h2>A Full Stack web Developer</h2>
            <button className="btn btn-outline-secondary"><a href="">Learn More</a></button>
        </div>
       </section>
{/* secotio one end */}

{/* section Two */}
<section className="section2">
                    <div className="container">
            <h1>About ME</h1>
        <div className="row mt-5">
           <div className="col-4">
            <div className="photo"></div>
            
           </div> 
           <div className="col-8">
            <div className="card border-dark">
            
                <div className="card-body">
                  
                    <p className="card-text"> My name is Rehan Raza, hailing from the charming district of Fatehpur. I embarked on my academic journey by earning a Bachelor's degree in [B.Com] in 2022. Currently, I am honing my skills and knowledge by pursuing a Post Graduate Diploma in Computer Applications (PGDCA) at Government Polytechnic Unnao. Beyond academics, my aspirations extend to the realm of entrepreneurship, where I am determined to carve a path as a successful businessman. </p>
                </div>
            </div>
           </div> 
          
        
        </div>
        </div>
    
        </section>
{/* section two end */}

{/* section three  */}
       <section  className="section3">
        <div className="pt-1">
        <div className="container-fluid">
        <div className="row">
            <div className="col-sm-4"></div>
            
            <div className="col-sm-4">
                <h1 className="mt-2"><u>Contact Me</u></h1>
                 <form>
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
                            <label> Your Email</label>
                            <input type="email" className="form-control"/> 
                        </div>
                        <div className="col-6 form-group ">
                            <label> Your Name</label>
                            <input type="text" className="form-control"/> 
                        </div>
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <select className="form-control">
                            <option>lucknow</option>
                            <option>lucknow</option>
                            <option>lucknow</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="address">Address</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label></label>
                        <button className="btn btn-info btn-block">REGISTER</button>
                    </div>
                </form></div>
                <div className="col-sm-4"> </div>

        </div>
    </div>
        </div>
       </section>

       {/* section three end */}

       {/* section four login*/}


       <section className="section4">
        <div className="container right-panel-active">
    
        <div className="container__form container--signup">
          <form action="#" className="form" method="post">
        
            <h2 className="form__title">Signin....</h2>
            <input type="text" placeholder="User" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="email" placeholder="Mobile" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="btn">submit</button>
          </form>
        </div>
      
        
        <div className="container__form container--signin">
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Signup</h2>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="btn">submit</button>
          </form>
        </div>
      
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" id="signIn">Signup</button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" id="signUp">Signin</button>
            </div>
          </div>
        </div>
      </div>
      
            
    
       </section>

       {/* end */}

       {/* section five signup */}
       <section  className="section5">
       
        <div className="container-fluid">
        <div className="row">
            <div className="col-4"></div>
             <div className="col-4"> </div>
                <div className="col-sm-4"> 
                <form className="mt-5">
                <h1 className="mt-5"><u>Signup......</u></h1>
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
export default Home