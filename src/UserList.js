import axios from "axios";
import { useState , useEffect } from "react";
import React from "react";

const client = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com/users" 
 });
const App = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get('?_limit=10').then((response) => {
         setPosts(response.data);
      });
   }, []);
        return (
         <div className="app">
         <h2>All users </h2>
         {posts.map((users) => {
            return (
               <div className="post-card" key={users.id}>
                  <h2 className="post-title">{users.name}</h2>
                  <p className="post-body">{users.email}</p>
                  <p className="post-body">{users.address.city}</p>

                  <p className="post-body">{users.address.zipcode}</p>
               </div>
            );
         })}
       </div>
        )
      }
    
    export default App;
