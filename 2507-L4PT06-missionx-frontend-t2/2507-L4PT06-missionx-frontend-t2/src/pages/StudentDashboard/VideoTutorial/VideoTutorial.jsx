import React from "react";
import styles from "./VideoTutorial.module.css";


const VideoTutorial = () => {
  return (
    <div className={styles.videoTutorialContainer}>
      <div className={styles.videoTutorialContent}>
        <h1 className={styles.videoTutorialTitle}>Scratch Overview</h1>

        <p className={styles.videoTutorialText}>
          Watch this tutorial to learn the basics of Scratch programming. This video will guide you through
          the interface and show you how to create your first project.
        </p>

        <div className={styles.videoTutorialVideoContainer}>
        <iframe
        src="https://www.youtube.com/embed/zOa5o9Yq_ZU?si=lWtaeMFtWQn-Ta6_" 
            title="Scratch Overview Tutorial" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            />
        </div>
        
        <p className={styles.videoTutorialText}>
          <strong>What you'll learn:</strong> Basic Scratch interface, how to add sprites,
          creating simple animations, and understanding code blocks.
        </p>
    </div>
    </div>
  );
};

export default VideoTutorial;