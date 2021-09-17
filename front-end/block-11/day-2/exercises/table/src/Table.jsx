import React,{ Component } from 'react';

import UserName from './UserName';
import UserOtherInfo from './UserOtherInfo';

class Table extends Component {
  render(){
    const users = 
    [
      {
      id:102,
      name:"T'Challa",
      email:'tchalla@wakanda.com',
      avatar:"https://ea9vhhuzko5.exactdn.com/wp-content/uploads/2020/08/chadwick.jpg?strip=all&lossy=1&ssl=1",
      },
      {
      id:1,
      name:'Diana Prince',
      email:'prince@diana.com',
      avatar:"https://br.web.img3.acsta.net/r_654_368/newsv7/16/03/02/22/48/540084.jpg",
      }
  ];

    return(
      users.map( user => ( 
      <div key={ user.id }>
        <UserName name={ user.name }/>
        <UserOtherInfo email={ user.email } avatar={ user.avatar }/>
      </div>
    )));
  }
}

export default Table;