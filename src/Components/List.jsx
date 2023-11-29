/* eslint-disable react/prop-types */
import { useState } from "react";

export default function List({ colors, setRemove, setEdit, position }) {
   const [hoveredElement, setHoveredElement] = useState(null);

   const getWidth = (e) => {
      console.log(e);
   };

   const handleMouseOver = (colorId) => {
      setHoveredElement(colorId);
   };

   const handleMouseOut = () => {
      setHoveredElement(null);
   };
   return (
      <div className="card mt-5">
         <div className="card-body">
            <h5 className="card-title">Bubbles space</h5>
            <ul className="window list-group">
               {colors === null && (
                  <li className="list-group-item">Loading...</li>
               )}
               {colors !== null && !colors.length && (
                  <li className="list-group-item">New bubbles appears here</li>
               )}
               {colors !== null &&
                  colors.length !== 0 &&
                  colors.map((color) => (
                     <li
                        key={color.id}
                        className="bubble"
                        onClick={(e) => getWidth(e)}
                     >
                        <div className="ball-bin">
                           <div
                              onMouseOver={() => handleMouseOver(color.id)}
                              onMouseOut={handleMouseOut}
                              className="color-ball"
                              style={{
                                 backgroundColor: color.color,
                                 width: color.size + "px",
                                 height: color.size + "px",
                                 top: color.y,
                                 left: color.x,
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
