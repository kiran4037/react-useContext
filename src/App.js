import React,{useContext} from 'react';
import './style.css';

//provider
//step1:create object of context
const Context=React.createContext();
export default function App() {
  //step2:prepare data inside root component 
  const country='India';
  const student={id:1, name:"ajay"};
  return (<div>
    {/* step3:declare provider */}
    <Context.Provider value ={{country,student}}>
    {/* step4:declare child component that want to access the root data */}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>

    </Context.Provider>
 
  </div>);
}
//consumer1
 function ComponentA(){
  const {country,student} = useContext(Context);
  return(
    <div>
      <h1>A component:{country},{student.id},{student.name}</h1>
     
    </div>
  )
 }
//consumer2
 function ComponentB(){
    const {country,student}=useContext(Context);
  return(
    <div>
      <h2>B component:{country},{student.id},{student.name}</h2>
     
    </div>
  )
 }
//consumer3
 function ComponentC(){
  const {country,student}=useContext(Context);
  return(
    <div>
      <h3>C component:{country},{student.id},{student.name}</h3>
      
    </div>
  )
 }
