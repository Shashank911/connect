import React from 'react';
import memories from './components/images/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
  return (
    <div className="container mx-auto max-w-lg">
      <header className="bg-gray-100 py-4 rounded-lg my-8 flex flex-row justify-center items-center">
        <h2 className="text-4xl text-center text-blue-500">Memories</h2>
        <img className="ml-4" src={memories} alt="memories" height="60" />
      </header>

      <div className="transition-all">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Posts />
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your content */}

    </div>
  );
};

export default App;
