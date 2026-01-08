import React from "react";
import Nav from "./Components/Nav";
import AddStudent from "./Pages/AddStudent";
import ViewStudent from "./Pages/ViewStudent";
import UpdateStudent from "./Pages/UpdateStudent";

const App = () => {
  return (
    <>

      <Router>
        <Nav />
        <Routes>
          <Route path='/addstudent' element={<AddStudent/>}/>
          <Route path='/viewstudent' element={<ViewStudent/>}/>
          <Route path='/updatestudent/:id' element={<UpdateStudent/>}/>
        </Routes>
      </Router>

    </>
  )
}
export default App;