import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"
import {Container} from "./App.styled"
import data from '../data/data.json'
import user from '../data/user.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

export default function App () {
  return (
    <Container
    >
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics
        Statistics title="Upload stats"
        stats={data} />
      <FriendList
        friends={friends} />
      <TransactionHistory items={transactions}/>
  </Container>
  );
};
