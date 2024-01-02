import React from 'react';
import RegularList from './components/lists/RegularList'
import { authors } from './data/authors'
import SmallAuthorListItem from './components/authors/SmallAuthorListItems';
import LargeAuthorListItem from './components/authors/LargeAuthorListItems';
import Modal from './components/Modal';

const App: React.FC = () => {
  return (
    <>
      <Modal>
        <div>TEST</div>
      </Modal>
    </>
  )
}

export default App;