import React from "react";
import push from "react-push-notification";

const Practicing = () => {
  const put = () => {
    push({
      title: "Praticing my assignment",
      message: "Omo network is very bad",
      duration: 10000,
      native: true,
      // icon: `${pic}`,
    });
  };

  function requestNotificationPermission() {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        }
      });
    }
  } // allow notification access
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "300px",
          backgroundColor: "GrayText",
          flexDirection: "column",
        }}
      >
        <button onClick={requestNotificationPermission}>yoooo</button>
        <button onClick={put}>click</button>
      </div>
    </div>
  );
};

export default Practicing;
