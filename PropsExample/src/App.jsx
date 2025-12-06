import Card from "./components/Card"
import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";


// function App(){
//   let name="kanpani";
//   let age=20;
//   let address={
//     city:'Lucknow',
//     state:'UttarPradesh'
//   }
//   let skils=['cooking ','singing ','writing']

//   function greet(){
//       return "welcome to pentagon space for AAyaa aunty"
//   }
//   return (
//     <> 
//      {/* <Card name={name} age={age} address={address} skills={skils.join("-")} greet={greet}/> */}

//      <Nav1/>
//      <Nav2/>
//     </>
//   )

// }

const App=()=>{
  function onChanging(val){
    console.log(val)
  }
  return(
      <input type="text" onChange={(elem)=>{
        onChanging(elem.target.value)
      }} />
  )
}

export default App