import Profile from './components/Profile';
import user from './social-profile/user.json';

import FriendList from './components/FriendList';
import friends from './friend-list/friends.json';

import Statistics from './components/Statistics';
import data from './statistics/data.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from './transaction-history/transactions.json';

export default function App() {
  const isOnline = false;

  return (
    <div>
      <Profile
        username={user[0].username}
        tag={user[0].tag}
        location={user[0].location}
        avatar={user[0].avatar}
        stats={user[0].stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} />; */}

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
