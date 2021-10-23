import React, {useState} from 'react';
import {StyledContainer, Title, Button, Foot} from './styled-components/style';
import Input from './Input'

const list = ["FirstName", "LastName", "Email", "Password" ]
const App = () => {

  const [input, setInput] = useState({})


  const clicked = () => {
    for(let i=0; i<list.length;i++){
      if(!input[list[i]]){
      alert(`Fill the ${list[i]}`)
      return
    }else if(input.Password !== input.Confirm || input.Password.length < 8){
      alert(input.Password.length < 8 ? "Password should be min 8 character" : "Password are not same")
      return
    }}                  
    
  }        
                          
  return(
    <StyledContainer>
      <Title>Welcome to Clarusway</Title>
      <Input placeholder="First Name" onName={(e)=>setInput({...input, FirstName: e.target.value})}/>
      <Input placeholder="Last Name" onName={(e)=>setInput({...input, LastName: e.target.value})}/>
      <Input type="email" placeholder="Email" onName={(e)=>setInput({...input, Email: e.target.value})}/>
      <Input placeholder="Password" type="password" onName={(e)=>setInput({...input, Password: e.target.value})} />
      <Input placeholder="Confirm Password" type="password" onName={(e)=>setInput({...input, Confirm: e.target.value})}  />
      <div>
        <Input type="checkbox"/>I accept the Privacy Policy
      </div>
      <Button onClick={clicked} >Register</Button>

      <Foot>Already have an account? Login.</Foot>
    </StyledContainer>
  )
}

export default App;