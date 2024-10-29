// // src/components/Slider.tsx
// import React, { useState } from "react";

// interface SliderProps {
//   images: string[];
// }

// const Slider: React.FC<SliderProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handle navigation
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div className="min-w-full h-64 flex-shrink-0" key={index}>
//             <img
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Left arrow */}
//       <button
//         onClick={goToPrevious}
//         className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white"
//       >
//         &#9664;
//       </button>

//       {/* Right arrow */}
//       <button
//         onClick={goToNext}
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
//       >
//         &#9654;
//       </button>
//     </div>
//   );
// };

// export default Slider;
