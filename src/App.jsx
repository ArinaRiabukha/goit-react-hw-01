import React from "react";
import Profile from "./components/profile";
import userData from "./userData.json";

const App = () => {
  console.log(userData);
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;
