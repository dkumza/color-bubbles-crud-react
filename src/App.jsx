import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Create from "./Components/Create";
import { useEffect, useState } from "react";
import { read, store, destroy, update } from "./Functions/ls";
import List from "./Components/List";
import Edit from "./Components/Edit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const KEY = "colors";

function App() {
   const [colors, setColors] = useState(null);
   const [create, setCreate] = useState(null);
   const [remove, setRemove] = useState(null); // delete
   const [clear, setClear] = useState(null); // destroy
   const [edit, setEdit] = useState(null);
   const [updateBubble, setUpdateBubble] = useState(null);
   // const [position, setPosition] = useState([0, 0]);

   useEffect(() => {
      // imitate fetch from server
      setTimeout(() => {
         setColors(read(KEY));
      }, 100);
   }, []);

   useEffect(() => {
      if (null === create) {
         return;
      }
      const id = store(KEY, create);
      setColors((c) => [...c, { ...create, id }]);
      getName(create.color, id);
   }, [create]);

   useEffect(() => {
      if (null === clear) {
         return;
      }
      destroy(KEY, clear.id);
      setColors((c) => c.filter((color) => color.id !== clear.id));
      setClear(null);
      setRemove(null);
   }, [clear]);

   useEffect(() => {
      if (null === updateBubble) {
         return;
      }
      update(KEY, updateBubble.id, updateBubble);
      setColors((c) =>
         c.map((color) => (color.id === updateBubble.id ? updateBubble : color))
      );
      getName(updateBubble.color, updateBubble.id);
      setUpdateBubble(null);
      setEdit(null);
   }, [updateBubble]);

   const getName = (hex, id) => {
      hex = hex.replace("#", "");
      const url = "https://www.thecolorapi.com/id?hex=" + hex;
      axios
         .get(url)
         .then((res) => {
            const name = res.data.name.value;
            update(KEY, id, { name });
            setColors((c) =>
               c.map((color) => (color.id === id ? { ...color, name } : color))
            );
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="container w-100 user-87548 mx-auto">
         <div className="row w-100 ">
            <div className="w-25 ">
               <Create setCreate={setCreate} />
               <p className="text-center fst-italic small">
                  min screen width - 1200px to work properly
               </p>
            </div>
            <div className="w-75">
               <List
                  colors={colors}
                  // remove={remove}
                  setRemove={setRemove}
                  setEdit={setEdit}
                  // position={position}
               />
            </div>
         </div>
         {/* <Delete remove={remove} setRemove={setRemove} setClear={setClear} /> */}
         <Edit
            edit={edit}
            setEdit={setEdit}
            setUpdateBubble={setUpdateBubble}
            remove={remove}
            // setRemove={setClear}
            setClear={setClear}
         />
      </div>
   );
}

export default App;
