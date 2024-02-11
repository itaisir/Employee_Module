import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Employees from './Employees';
import Sales from './Sales';
import Supplies from './Supplies';
import Expenses from './Expenses';
import Production from './Production';
import Collection from './Collection';
import Suppliers from './Suppliers';
import Customers from './Customers';
import Materials from './Materials';
import Products from './Products';
import Stores from './Stores';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/supplies" element={<Supplies />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/production" element={<Production />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/materials" element={<Materials />} />
      <Route path="/products" element={<Products />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/*" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRouter;