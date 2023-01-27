import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, removeUser } from './redux/reducers/users';

function App() {
    const dispatch = useDispatch()
    const users = useSelector((store) => store.users.users)
    const usersCount = useSelector((store) => store.users.usersCount)
  return (
    <div className="App">
      <h2>Users= {usersCount}</h2>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name} {item.age}
            <button type='button' onClick={() => dispatch(removeUser(item.id))}>Удалить</button>
          </li>

        ))}
      </ul>

      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addUsers(e.target[0].value, e.target[1].value))
          e.target[0].value = ''
          e.target[1].value = ''

      }}>
        <input placeholder='name' type='text'/>
        <input placeholder='age' type='number'/>
        <button type='submit'>Добавить</button>
      </form>
    </div>
  );
}

export default App;