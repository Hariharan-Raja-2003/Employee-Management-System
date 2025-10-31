import React,{useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponents = () => {
  const [firstname, setFirstname]= useState('')
 const [lastname, setLastname]= useState('')
  const [email, setEmail]= useState('')

 const{id} = useParams();
 useEffect(()=> {
  if(id){
    getEmployee(id).then((response) =>{
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
    }).catch(error =>{
      console.error(error);
    })
  }
 },[id])

  const [errors, setErrors]=useState({
    firstname:'',
    lastname:'',
    email:''
  })
  const navigator=useNavigate();

const handleFirstName=(e) => setFirstname(e.target.value);
const handlelastName=(e)=>setLastname(e.target.value);
const handleEmail=(e)=>setEmail(e.target.value);

function saveOrUpdateEmployee(e){
    e.preventDefault();

    if(validateForm()){
       const employee={firstname, lastname, email}
    console.log(employee)

      if(id){
        updateEmployee(id, employee).then((response)=>{
          console.log(response.data);
          navigator('/employees');
        }).catch(error =>{
  console.error(error);
})
 } else {
    createEmployee(employee).then((response)=>{
        console.log(response.data);
        navigator('/employees')
    }).catch(error =>{
      console.error(error);
    });
     }
    }
}
function validateForm(){
    let valid=true;

    const errorsCopy= {...errors}
if(firstname.trim()){
errorsCopy.firstname='';
}
else{
    errorsCopy.firstname='Firstname is Required';
    valid=false;
}
if(lastname.trim()){
errorsCopy.lastname='';
}
else{
    errorsCopy.lastname='Lastname is Required';
    valid=false;
}
if(email.trim()){
    errorsCopy.email='';
}
else{
    errorsCopy.email='Email is Required';
    valid=false;
}
setErrors(errorsCopy);
return valid;
}

function pageTitle(){
if(id){
  return <h2 className='text-center'>UPDATE EMPLOYEE</h2>;
}
else{
  return <h2 className='text-center'>ADD EMPLOYEE</h2>;
}
}

  return (
    <div className='container'><br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                  pageTitle()
                }
                <div className='card-body'>
                  <form>
                    <div className='form-group mb-2'>
                       <label className='form-label'> FIRST NAME:</label>
                       <input type='text' placeholder='Enter First Name of Employee' name='firstName' value={firstname} className={`form-control ${errors.firstname ? 'is-invalid':''}`} onChange={handleFirstName}></input>
                       {errors.firstname && <div className='invalid-feedback'>{errors.firstname}</div>}
                    </div>
                     <div className='form-group mb-2'>
                       <label className='form-label'> LAST NAME:</label>
                       <input type='text' placeholder='Enter Last Name of Employee' name='lastName' value={lastname}  className={`form-control ${errors.lastname ? 'is-invalid':''}`} onChange={handlelastName}></input>
                       {errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div>}                    
                    </div>
                     <div className='form-group mb-2'>
                       <label className='form-label'> EMAIL:</label>
                       <input type='email' placeholder='Enter Email of Employee' name='email' value={email} className={`form-control ${errors.email ? 'is-invalid':''}`} onChange={handleEmail}></input>
                     {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                    </div>
                    <button className='btn btn-secondary' onClick={saveOrUpdateEmployee}>SUBMIT</button>
                  </form>
                    </div>

            </div>

        </div>
       
    </div>
  )
}

export default EmployeeComponents