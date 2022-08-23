import { StatusBar } from 'expo-status-bar';
import Home from './src/Pages/Home';
import { Routes } from './src/Routes';

export default function App() {
  return (
    <>
     <StatusBar  backgroundColor="#fff" translucent={true} />
  <Routes/>
  </>
   
  );
}