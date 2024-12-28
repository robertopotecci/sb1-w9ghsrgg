import React from 'react';
import { GeometricShapes } from './components/GeometricShapes';
import { Title } from './components/Title';

const App = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <GeometricShapes />
      
      <div className="z-10 text-center space-y-8">
        <Title />

        <div className="text-2xl text-pink-500 font-semibold tracking-widest">
          BATTLE THE SQUID SQUAD
        </div>

        <div className="text-xl text-gray-400 tracking-wider animate-pulse">
          COMING SOON
        </div>
      </div>
    </div>
  );
};

export default App;