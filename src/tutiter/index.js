import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";


function Tuiter() {
 return (
   <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
         <Routes>
           <Route path="/home" element={<h1>Home</h1>} />
           <Route path="/explore" element={<h1>Explore</h1>} />
           <Route path="/notifications" element={<h1>Notifications</h1>}/>
         </Routes>
       </div>
       <div className="col-3">
         <h1>Who to follow</h1>
       </div>
     </div>
   </div>
 );
}
export default Tuiter;
