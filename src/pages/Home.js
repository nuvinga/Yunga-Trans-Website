import BackgroundVideo from "../assets/videos/hero-video.mp4";
import useScrollPosition from "../helpers/useScrollPositionHook";

const Home = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div>
      <div class="video-wrapper">
        <h1 style={{position: "absolute", zIndex: "2"}}>Connecting Boundaries, Yunga</h1>
        <video
          autoPlay={true}
          muted
          loop
          className="video-content"
          style={
            scrollPosition >= 1000 ? { display: "none" } : { display: "block" }
          }
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="test-div">
        <p>hello</p>
      </div>
    </div>
  );
};

export default Home;





