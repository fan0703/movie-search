import { useState } from "react"

export default function  Form (props){
 //adding Form's state
 const [formData, setFormData] = useState({searchterm:''})
 //functions
 const handleChange = (e) =>{
    setFormData({...formData , [e.target.name]: e.target.value}) //...formData: what the state already is //e.target.name is searchterm// e.target.value is what somebody type in the input
    console.log(e.target.value)
 }
 const handleSubmit = (e) =>{
    e.preventDefault() //prevent whole page from refreshing , just wanna component change
    props.moviesearch(formData.searchterm)

 }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                name= 'searchterm'
                onChange= {handleChange} 
                value={formData.searchterm}/>
                <input type='submit' value= 'submit' />
            </form>
        </div>
        )
  };