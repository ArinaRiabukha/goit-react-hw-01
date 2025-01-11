import React from "react";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json"

import Profile from "./components/Profile/profile";
import FriendList from "./components/FriendList/friendList";
import TransactionHistory from "./components/TransactionHistory/transactionHistory"


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
