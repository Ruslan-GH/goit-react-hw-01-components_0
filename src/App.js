import Profile from './components/Profile';
import user from './social-profile/user.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user[0].username}
        tag={user[0].tag}
        location={user[0].location}
        avatar={user[0].avatar}
        stats={user[0].stats}
      />
    </div>
  );
}
