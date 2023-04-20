import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Home from './pages/Home/Home';
const queryClient = new QueryClient();

const App = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Header />} 
        />
        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;