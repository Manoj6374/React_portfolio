// import  { useRef, useState, useEffect } from 'react';

// export const Cursor = () => {
//     const cursorRef = useRef(null);
//     const cursorBorderRef = useRef(null);
//     const [cursorX, setCursorX] = useState(0);
//     const [cursorY, setCursorY] = useState(0);
//     const [borderX, setBorderX] = useState(0);
//     const [borderY, setBorderY] = useState(0);
  
//     useEffect(() => {
//       const isTouchDevice = () => {
//         try {
//           document.createEvent('TouchEvent');
//           return true;
//         } catch (e) {
//           return false;
//         }
//       };
  
//       const move = (e) => {
//         const clientX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
//         const clientY = isTouchDevice() ? e.touches[0].clientY : e.clientY;
//         setCursorX(clientX);
//         setCursorY(clientY);
//         cursorRef.current.style.left = `${clientX}px`;
//         cursorRef.current.style.top = `${clientY}px`;
//       };
  
//       document.addEventListener('mousemove', move);
//       document.addEventListener('touchmove', move);
//       document.addEventListener('touchend', (e) => {
//         e.preventDefault();
//       });
  
//       const borderAnimation = () => {
//         const gapValue = 5;
//         const nextBorderX = borderX + (cursorX - borderX) / gapValue;
//         const nextBorderY = borderY + (cursorY - borderY) / gapValue;
//         setBorderX(nextBorderX);
//         setBorderY(nextBorderY);
//         cursorBorderRef.current.style.left = `${nextBorderX}px`;
//         cursorBorderRef.current.style.top = `${nextBorderY}px`;
//         requestAnimationFrame(borderAnimation);
//       };
  
//       requestAnimationFrame(borderAnimation);
  
//       return () => {
//         document.removeEventListener('mousemove', move);
//         document.removeEventListener('touchmove', move);
//       };
//     }, [borderX, borderY, cursorX, cursorY]);
  
//     return (
//       <div>
//         <div ref={cursorRef} id="cursor"></div>
//         <div ref={cursorBorderRef} id="cursor-border"></div>
//       </div>
//     );
//   };
  

