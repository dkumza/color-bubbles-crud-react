/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Edit({ edit, setEdit, setUpdateBubble }) {
   const [color, setColor] = useState("#ffffff");
   const [size, setSize] = useState(100);

   useEffect(() => {
      if (null === edit) {
         return;
      }
      setColor(edit.color);
      setSize(edit.size);
   }, [edit]);

   const save = (_) => {
      setUpdateBubble({ ...edit, color, size });
      setEdit(null);
   };

   if (null === edit) {
      return null;
   }

   return (
      <div className="modal">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Edit Color and Size</h5>
                  <button
                     type="button"
                     className="btn-close"
                     onClick={() => setEdit(null)}
                  ></button>
               </div>
               <div className="modal-body">
                  <div className="mb-3">
                     <label className="form-label">Color</label>
                     <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="form-control form-control-color w-100"
                     />
                  </div>
                  <div className="mb-3">
                     <label className="form-label">
                        Size <b>{size}</b>
                     </label>
                     <input
                        type="range"
                        min={100}
                        max={200}
                        step={1}
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="form-range"
                     />
                  </div>
               </div>
               <div className="modal-footer">
                  <button
                     onClick={() => setEdit(null)}
                     type="button"
                     className="btn btn-secondary"
                  >
                     Cancel
                  </button>
                  <button
                     type="button"
                     onClick={save}
                     className="btn btn-success"
                  >
                     Save
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
