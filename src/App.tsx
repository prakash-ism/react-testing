import './App.css';
import { RandomNumber } from './components/restriction/RandomNumbers';
import { Toast } from './components/templateliterals/Toast';
// import { UserContextProvider } from "./components/context/UserContext";
// import { User } from './components/context/User';
// import { List } from './components/generics/List';
// import { Button } from './components/Button';
// import { Container } from './components/Container';
// import { Input } from './components/Input';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   },
  // ]

  return (
    <div className="App">
      {/* <Greet name='Prakash' isLoggedIn={false} /> 
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar> */}

      {/* <Button 
        handleClick={(event,id) => {
          console.log("Button clicked",event,id)
        }}
      />
      <Input value='' handleChange={(event) => console.log(event)} /> */}

      {/* <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <List 
        items={["Batman", "SuperMan", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List 
        items={[1,2,3,4]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      <Toast position='center' />
    </div>
  );
}

export default App;
