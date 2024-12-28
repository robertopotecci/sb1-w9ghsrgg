import React from 'react';

export const GeometricShapes = () => (
  <>
    {/* Background gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff006680_0%,transparent_50%)] opacity-20"></div>
    
    {/* Primary shapes */}
    <div 
      className="absolute w-32 h-32 border-2 border-pink-500 rounded-full opacity-20"
      style={{
        top: '20%',
        left: '20%',
        animation: 'float1 15s infinite ease-in-out'
      }}
    />
    
    <div 
      className="absolute w-32 h-32 border-2 border-pink-500 triangle opacity-20"
      style={{
        bottom: '20%',
        right: '20%',
        animation: 'float2 18s infinite ease-in-out'
      }}
    />
    
    <div 
      className="absolute w-40 h-40 border-2 border-pink-500 square opacity-20"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'float3 20s infinite ease-in-out'
      }}
    />
    
    {/* Additional triangles */}
    <div 
      className="absolute w-24 h-24 border-2 border-pink-500 triangle opacity-15"
      style={{
        top: '15%',
        right: '35%',
        animation: 'float2 22s infinite ease-in-out'
      }}
    />
    
    <div 
      className="absolute w-16 h-16 border-2 border-pink-500 triangle opacity-10"
      style={{
        bottom: '25%',
        left: '40%',
        animation: 'float1 19s infinite ease-in-out'
      }}
    />
    
    <div 
      className="absolute w-28 h-28 border-2 border-pink-500 triangle opacity-15"
      style={{
        top: '40%',
        right: '15%',
        animation: 'float3 24s infinite ease-in-out'
      }}
    />
    
    {/* Additional circles and squares */}
    <div 
      className="absolute w-24 h-24 border-2 border-pink-500 rounded-full opacity-10"
      style={{
        top: '30%',
        right: '25%',
        animation: 'float2 25s infinite ease-in-out'
      }}
    />
    
    <div 
      className="absolute w-20 h-20 border-2 border-pink-500 square opacity-15"
      style={{
        bottom: '35%',
        left: '25%',
        animation: 'float1 21s infinite ease-in-out'
      }}
    />
    
    <div 
      className="absolute w-16 h-16 border-2 border-pink-500 rounded-full opacity-10"
      style={{
        top: '60%',
        right: '40%',
        animation: 'float3 23s infinite ease-in-out'
      }}
    />
    
    <div 
      className="absolute w-36 h-36 border-2 border-pink-500 square opacity-10"
      style={{
        top: '10%',
        left: '35%',
        animation: 'float2 26s infinite ease-in-out'
      }}
    />
  </>
);