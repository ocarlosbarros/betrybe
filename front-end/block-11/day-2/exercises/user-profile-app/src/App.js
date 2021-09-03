import UserProfile from './UserProfile';

function App() {
  const tchalla = {
    id:102,
    name:"T'Challa",
    email:'tchalla@wakanda.com',
    avatar:"https://ea9vhhuzko5.exactdn.com/wp-content/uploads/2020/08/chadwick.jpg?strip=all&lossy=1&ssl=1",
  };
  const diana = {
    id:1,
    name:'Diana Prince',
    email:'prince@diana.com',
    avatar:"https://br.web.img3.acsta.net/r_654_368/newsv7/16/03/02/22/48/540084.jpg",
  };

  return (
    <>
      <UserProfile user={diana}/>
      <UserProfile user={tchalla}/>
    </>
  );
}

export default App;
