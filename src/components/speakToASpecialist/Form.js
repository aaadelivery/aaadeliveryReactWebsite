import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';


const updateValue = (func, value) => {
    if (func) {
      func(value);
    }
  };



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export  function CustomizedSnackbars(props) {
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);


  const handleClick = () => {
    setLoading(true);
    fetch("https://formsubmit.co/ajax/info@aaadeliveryservice.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: props.name,
          message: props.message,
          email:props.email,
          phone:props.phone,
          company:props.company,
          address:props.address,
          _cc:"roger@aaadeliveryservice.com"
      })
  })
      .then(response => {response.json();setLoading(false);})
      .then(data => {setOpen(true) ; console.log(data)} )
      .catch(error => {setError(true) ; console.log(error)})
    
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
    
      <a>
        { loading ?
         <button className="round-button large-circle-button">
          <CircularProgress style = {{color:"#ffffff"}} />
        </button>
        :
        <button className="round-button large-circle-button" onClick={handleClick} >
          Submit
        </button>
        }
        
      </a>


      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Form was sent successfully
        </Alert>
      </Snackbar>

      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          An error ocurred while sending the form 
        </Alert>
      </Snackbar>
      
    </>

  );
}
  
export default function FormTextFields() {
    const [firstName, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [message, setMessage] = React.useState("");


    
  return (
    <Box

      style={{backgroundColor:"#8bbafb" , width:"100%" , margin:"auto" , borderWidth:20 , borderStyle:"solid" , borderColor:"#8bbafb" , borderRadius:10 }}

    >
            <div id="specialist-form">

            <input type="text" id="name" name="name" placeholder="First and last name" value={firstName} onChange={(evt) =>
                    updateValue(setFirstName, evt.target.value)
                  }></input>

            <input type="text" id="mail" name="mail" placeholder="Email address.." value={email} onChange={(evt) =>
                    updateValue(setEmail, evt.target.value)
                  }></input>

            <input type="text" id="phone" name="phone" placeholder="Phone number.." value={phone} onChange={(evt) =>
                    updateValue(setPhone, evt.target.value)
                  }></input>

            <input type="text" id="company" name="firstname" placeholder="Company name .." value={company} onChange={(evt) =>
                    updateValue(setCompany, evt.target.value)
                  }></input>
                  
            <input type="text" id="fname" name="addr" placeholder="Full address.." value={address} onChange={(evt) =>
                    updateValue(setAddress, evt.target.value)
                  }></input>
            <textarea type="text"  rows="5" id="fname" name="msg" placeholder="Message.." value={message} onChange={(evt) =>
                    updateValue(setMessage, evt.target.value)
                  }></textarea>

              
              <CustomizedSnackbars name = {firstName} email = {email} phone = {phone} company={company} address={address} message={message} />
            </div>
    </Box>
  );
}
