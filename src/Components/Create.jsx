/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Create({ setCreate }) {
   const [color, setColor] = useState("#ffffff");
   const [size, setSize] = useState(100);
   const [x, setX] = useState(rand(0, 700 - size));
   const [y, setY] = useState(rand(0, 800 - size));

   function rand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
   }

   // get random X and Y values
   const handlePosition = () => {
      setX(rand(0, 700 - size));
      setY(rand(0, 800 - size));
   };

   const add = () => {
      setCreate({
         color,
         size: parseInt(size),
         x,
         y,
      });
   };

   return (
      <div className="card mt-5">
         <div className="card-body">
            <h5 className="card-title">Create new Color Bubble</h5>
            <div className="mb-3">
               <label className="form-label">Select color</label>
               <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="form-control form-control-color w-100"
               />
            </div>
            <div className="mb-3">
               <label className="form-label">
                  Choose Size <b>{size}</b>
               </label>
               <input
                  type="range"
                  min={100}
                  max={200}
                  step={1}
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="form-range"
               />
            </div>
            <button
               type="button"
               onClick={() => {
                  add();
                  handlePosition(size);
               }}
               className="btn btn-outline-primary"
            >
               Add Color
            </button>
         </div>
      </div>
   );
}
