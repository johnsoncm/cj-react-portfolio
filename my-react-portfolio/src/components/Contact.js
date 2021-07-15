import React from 'react';

const styles = {
    contactStyle: {
     marginLeft: '15%',
     marginRight: '15%',
     paddingBottom: '100px'
    },
    formStyle:{
        fontFamily: 'avenir',
        fontSize: '1.5rem',
        fontWeight: 'bolder'
    },
    buttonStyle:{
        fontFamily: 'avenir',
        fontWeight: 'bolder',
        fontSize: '1.5rem',
        borderRadius: '1.6rem',
        backgroundColor: 'lightgreen',
        marginBottom: '15px',
        
    }
}


export default function Contact() {
    return (
  

       
        <form id="contact-form" name="contact-form" style={styles.contactStyle} >
  <div className="contact-me">Keep in touch!</div>
 
        <div className="row">

           
            <div className="col-md-6" style={styles.formStyle}>
                <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control"/>
                    <label  className="form-fields">Your name</label>
                </div>
            </div>
          
            <div className="col-md-6"style={styles.formStyle}>
                <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control"/>
                    <label  className="form-fields">Your email</label>
                </div>
            </div>
            

        </div>
      
        <div className="row">
            <div className="col-md-12"style={styles.formStyle}>
                <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control"/>
                    <label  className="form-fields">Subject</label>
                </div>
            </div>
        </div>
        
        <div className="row">

        
            <div className="col-md-12">

                <div className="md-form"style={styles.formStyle}>
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                    <label className="form-fields">Your message</label>
                </div>

            </div>
        </div>
        <textarea rows="4" cols="32"></textarea>
        <button type="submit" className="submit-button" style={styles.buttonStyle}>Submit</button>
        </form>
       
        
   
        
   

    
        

  
        
      )
  }
        

//   <form className="form-styling">
//   <h1 className="contact-me">Contact Me!</h1>
//   <input className="fName" type="text" name="name" placeholder="Full Name">
//   </input>
//   <input type="text" name="name" placeholder="Email">
//   </input>
//   <input type="text" name="name" placeholder="Phone Number">
//   </input>
//   <input type="text" name="name" placeholder="Website"></input>
        
//   </form>


      
