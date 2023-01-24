import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { AuthorForm } from './components/AuthorForm';
import { Edit} from './components/Edit';
import { ErrorPage } from './components/ErrorPage';
import { Header } from './components/Header';
import { DisplayAll } from './components/DisplayAll';



function App() {
  return (
    <>
      <Header />
        <main>
          <Routes>
            <Route path='/' element= { <Home/> } exact/>
            <Route path='/new' element= { <AuthorForm/> } />
            <Route path='/display' element= { <DisplayAll/> } />
            <Route path='/edit/:id' element= { <Edit/> } />s
            <Route path='*' element= { <ErrorPage/> } />
          </Routes>
        </main>
    </>
  );
}

export default App;