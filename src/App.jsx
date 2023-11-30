import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Create from "./Components/Create";
import { useEffect, useState } from "react";
import { read, store, destroy, update } from "./Functions/ls";
import List from "./Components/List";
import Delete from "./Components/Delete";
import Edit from "./Components/Edit";

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
      console.log(create);
      const id = store(KEY, create);
      setColors((c) => [...c, { ...create, id }]);
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
      setUpdateBubble(null);
      setEdit(null);
   }, [updateBubble]);

   return (
      <div className="container user-87548">
         <div className="row">
            <div className="col-5">
               <Create setCreate={setCreate} />
            </div>
            <div className="col-7">
               <List
                  colors={colors}
                  remove={remove}
                  setRemove={setRemove}
                  setEdit={setEdit}
                  // position={position}
               />
            </div>
         </div>
         <Delete remove={remove} setRemove={setRemove} setClear={setClear} />
         <Edit
            edit={edit}
            setEdit={setEdit}
            setUpdateBubble={setUpdateBubble}
            remove={remove}
            setRemove={setRemove}
            setClear={setClear}
         />
      </div>
   );
}

export default App;
