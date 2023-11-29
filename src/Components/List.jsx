/* eslint-disable react/prop-types */
import { useState } from "react";

export default function List({ colors, setRemove, setEdit, position }) {
   const [hoveredElement, setHoveredElement] = useState(null);

   //    const getWidth = (e) => {
   //       console.log(e);
   //    };

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
            <div className="window ">
               {colors === null && <div className="">Loading...</div>}
               {colors !== null && !colors.length && (
                  <div className="">New bubbles appears here</div>
               )}
               {colors !== null &&
                  colors.length !== 0 &&
                  colors.map((color) => (
                     <div
                        key={color.id}
                        className="bubble"
                        // onClick={(e) => getWidth(e)}
                     >
                        <div className="ball-bin">
                           <div
                              onMouseOver={() => handleMouseOver(color.id)}
                              onMouseOut={handleMouseOut}
                              className="color-ball"
                              style={{
                                 backgroundColor: color.color,
                                 width: color.size,
                                 height: color.size,
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
                     </div>
                  ))}
            </div>
         </div>
      </div>
   );
}
