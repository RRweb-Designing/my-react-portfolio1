
export const Signin = () =>
{
 
    return(
      
        <>
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
        </>
    )
    
};
