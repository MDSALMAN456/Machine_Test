import React from "react";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import Error from "./Screens/Error";
import Dashboard from "./Screens/Dashboard"
import { Switch,Route } from "react-router";
import Protect from "./protected/routes";
import Welcome from "./Screens/Welcome";
import GoodBye from "./Screens/GoodBye";

const App=()=>{
  return(
    <>
    <Switch>
      <Route exact path="/" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/dashboard" component={()=><Protect component={Dashboard}/>}/>
      <Route exact path="/dashboard/welcome" component={()=><Protect component={Welcome}/>}/>
      <Route exact path="/dashboard/goodbye" component={()=><Protect component={GoodBye}/>}/>
      <Route component={Error}/>
    </Switch>
    </>
  )
}
export default App;