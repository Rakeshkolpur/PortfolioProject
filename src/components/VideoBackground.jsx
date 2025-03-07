// import React from "react";
// import video from "../assets/mars.mp4"; // Use import instead of require
// import "../index.css"; // Make sure CSS is imported

// const VideoBackground = () => {
//   return (
//     <div className="video-background">
//       <video autoPlay loop muted>
//         <source src={video} type="video/mp4" />
//       </video>
//     </div>
//   );
// };

// export default VideoBackground;
import React from "react";
import video from "../assets/mars.mp4";
import "../index.css";

const VideoBackground = () => {
  return (
    <div className="video-background">
      
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
   
    </div>
  );
};

export default VideoBackground;