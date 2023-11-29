/* eslint-disable react/prop-types */
import { useState } from "react";

export default function List({ colors, setRemove, setEdit }) {
   const [hoveredElement, setHoveredElement] = useState(null);

   const handleMouseOver = (colorId) => {
      setHoveredElement(colorId);
   };

   const handleMouseOut = () => {
      setHoveredElement(null);
   };
   return (
      <div className="card mt-5">
         <div className="card-body">
            <h5 className="card-title">Colors</h5>
            <ul className="list-group">
               {colors === null && (
                  <li className="list-group-item">Loading...</li>
               )}
               {colors !== null && !colors.length && (
                  <li className="list-group-item">No colors yet</li>
               )}
               {colors !== null &&
                  colors.length !== 0 &&
                  colors.map((color) => (
                     <li key={color.id} className="list-group-item">
                        <div className="ball-bin">
                           <div
                              onMouseOver={() => handleMouseOver(color.id)}
                              onMouseOut={handleMouseOut}
                              className="color-ball"
                              style={{
                                 backgroundColor: color.color,
                                 width: color.size + "px",
                                 height: color.size + "px",
                              }}
                           >
                              {hoveredElement === color.id && (
                                 <div className="edit-btn">
                                    <button
                                       className="edit-btn-class"
                                       onClick={() => setEdit(color)}
                                    >
                                       <i className="bi bi-pencil-square text-success"></i>
                                    </button>
                                    <button
                                       className="edit-btn-class "
                                       onClick={() => setRemove(color)}
                                    >
                                       {" "}
                                       <i className="i bi-x-lg text-danger"></i>
                                    </button>
                                 </div>
                              )}
                           </div>
                        </div>
                     </li>
                  ))}
            </ul>
         </div>
      </div>
   );
}
