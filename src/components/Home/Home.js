import React, { useEffect, useState } from "react";
import "./Home.css";
function Home() {
  const [visible, setVisible] = useState(false);
  const [roomId, setRoomId] = useState();
  const [file, setFile] = useState(1);
  const [progress,setProgress] = useState(40);

  function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  }

  const fileHandler = (e) => {
    let str = "";
    str +=
      getRandomNumber(100, 999).toString() +
      "-" +
      getRandomNumber(100, 999).toString();
    // setVisible(!visible);
    setFile(e.target.files);
    setRoomId(str);
  };
  return (
    <div className="Home">
      <div className="share-wrapper">
        {file != null ? (
          <div className="share-box">
            {/* ↕ */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEdElEQVR4nO2aT2gcVRzHv29mNk1sbGvSJgvFWqQ9KGIllxz8dymCCuIaqGIRPShiaRKL3noJevBkSGhai8dUajQhighWaAwKWk+KB5VSbTVmN5n9k9l/M7vz7z0PIcQ0yc5k9s3OW9zPZZd57/3ebz6z79/uAi1a/K8hQRod+7T8Upsiv6LIOASgnXNOAIBp9kBPlvZqv1p97518YWI8jD6AHQo4Nl194s4OaeqOdumusBJa4+uYsvqGAWrhsP1ldeD4q8+//x3vfiS/FR+a0V/bv1e+0oib3wABevf9FXt537lvL08Nvs47vC8BfTPlB7s7YxdliQQaMjxQ2i2c6P7g4vTUqVM84/oSEIvJl2VF8v1pCQu5zUGi68Pzk5PDL/KK6XlT/R/l9nR2KPfz6rBe5F0OnjY+uXRh9MzjPOJ5Cqgo7Sei/OhvRRfJSgln5uqF0cFH643lKUCW2b31dsIdCYgzVUk4n39zfnz4kTpD1YaQcNb5umCrL3GmKs+Zs/MTY8OPBQ0V+cQWCLr+Ns5UZcCanQsqQVwBrEaZu3FKijNVedb6Ym58/K0dDwdhBVBb2b7Q3HzpIEsqA+bs/E4lCCsgY969dQED4Gy9KK1JGBt7u99vP8IK+IwNbV1QITWHx0GWVJ6yv5ofHT3T5acfcQV0DCJTOrS5QPfekhylNzoOs8WP/fQjrAAAGIxdg6Hv3Xix7C/lh90fjo+MjNSYSFYRWoAm9+Jk7Bau5/vXl76iv01pD8tIBzpzz3jV8zQUNQbZg6Hd3+Me63ckKqNI2m3okTO+2i5J8W1m0nWEF7DG3/J9OGufwz+7Kr7bEMZSwNmadYQeAreTK1jcYzaNANNyYVRd7nGbRkAmz//pA00iwHUpsvkt9r8caAoBas4EpbVOR8ERXoDtUGRCevpAEwhYTFfghvT0AcEFFHUHWjGcyW8NYQW4LsPCshF6P8IKWFjSYdn81/3bEVJAWqtCK9sN6Us4AYWSjWTa/36/XoQSUDYc3EzpYOFN+psQRkDZcPDnYhmskXcPQY7D+bKNWykdLMT1fjsiF5DWqkiqlZo/A4RJZAJcyrCwZEArhbvR8SISAUXdwcKy0ZB13ouGCrBdipRaQS7k7e1OaIgAx6VI50xk8maoB5sghCqgarnI5i1kNRO0wcubX7gLsByKQsnCSsGCHsJ3eLypS4BLGUyLomq6KFcclAwHpiX+Tf8XTwG5ovObVipDlgkoZaCUwaUMjs1gu9SrufB4CjB0q8DE+o8UV4Q5C0RFS0DUCURNS0DUCURNS4BXBUokcU4uO8RP7p4CGCUqn3QigCDlVcVTQBdWfgZQ4pJQYynmMt2/eFXyFPDH0FGTMHaJT06NgzA2iRFS/xAAAOKydwA001BYlhT6rp+KvgSk3+xVKaQEAK2utBqDRqmUUN+Ip/1U9r0MrpzuvkZc1g9gLnBqYUNwlbisf2Wo+0f/TQKwfyLTRxh7khLpCCHYHSQGLxiDLoHeYCBXsqcP/BRlLi1aNCH/AilRrSVndv9MAAAAAElFTkSuQmCC"></img>
            <h3>{file}</h3>
            <p>Wohoo!, your file is selected.</p>
            <div className="progress-bar"></div>
            <div className="progress-container">
              <div className="progress" style={{width:`${progress}%`}}></div>
            </div>
            <h2>{progress}%</h2>
          </div>
        ) : (
          <div className="share-box">
            <label for="file-upload" className="share-btn">
              <input
                id="file-upload"
                type="file"
                onClick={(e) => fileHandler(e)}
              />
              {/* ↕ */}
              <img
                class="upload-img"
                src="https://img.icons8.com/flat-round/344/upload-document--v1.png"
              />
            </label>
            <h3>Drop it like its hot!</h3>
            <p>No size limit</p>
          </div>
        )}
      </div>
      {visible ? (
        <div className="room-details">
          <h3>Room Details</h3>
          <h1>{roomId}</h1>
          <hr width="80%"></hr>
          <div className="members-logged">
            <h3>Connected Devices</h3>
            <p>{navigator.userAgent.match(/^[^\(]+\((\w+)/)})</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
