import React from "react";
import { useState, useEffect } from "react";

const Youtube = () => {
  const [youtube, setYoutube] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=AIzaSyAgG2Naf93EIP_XanAVHiKOEYjP6PE40tU"
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutube(() => data.items);
      });
    // axios.get("URL").then((data) => {
    //   setYoutube(() => data.items);
    // });
  }, []);
  return (
    <div className="allVideo">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youtube.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
};

export default Youtube;
