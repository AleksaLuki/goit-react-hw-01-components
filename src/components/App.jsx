// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template1
//     </div>
//   );
// };
import css from './App.module.css'

import { Profile } from './Profile/Profile';
import user from './Profile/user';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
   <Statistics title="Upload stats" stats={data} />
    </div>
  );
};