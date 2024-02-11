// // Employees.tsx
// import React, { useState } from 'react';
// import { Button, Table, ToggleButton } from 'react-bootstrap';
// import EmployeeModal from './EmployeeModal.tsx';

// export interface Employee {
//   id: number;
//   name: string;
//   age: number;
//   salary: number;
//   status: 'active' | 'freeze';
//   phoneNumber: number;
//   pages?: string[];
// }

// const Employees: React.FC = () => {
//   const [showAddEditModal, setShowAddEditModal] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
//   const [selectedPages, setSelectedPages] = useState<Record<number, string[]>>({});
//   const [employees, setEmployees] = useState<Employee[]>([
//     { id: 1, name: 'John', age: 31, salary: 5000, status: 'active', phoneNumber: 96899817977, pages: ['الموظفين', 'البيع', 'التوريد'] },
//     { id: 2, name: 'Jane', age: 25, salary: 4000, status: 'freeze', phoneNumber: 96899817944 },
//     { id: 3, name: 'Kean', age: 27, salary: 5000, status: 'active', phoneNumber: 96897627917, pages: ['التوريد', 'المصروفات', 'الإنتاج'] },
//     { id: 4, name: 'Leno', age: 28, salary: 5500, status: 'active', phoneNumber: 96899817832 },
//     { id: 5, name: 'Mark', age: 31, salary: 6000, status: 'active', phoneNumber: 96899817012, pages: ['التحصيل', 'الموردين', 'العملاء'] },
//     { id: 6, name: 'Luis', age: 26, salary: 4500, status: 'freeze', phoneNumber: 96899822933, pages: ['الموظفين', 'البيع'] },
//     { id: 7, name: 'Dunk', age: 29, salary: 4800, status: 'active', phoneNumber: 96899822943, pages: ['الموظفين', 'البيع', 'التحصيل'] }
//   ]);

//   const handleCloseAddEditModal = () => {
//     setSelectedEmployee(null);
//     setShowAddEditModal(false);
//   };

//   const handleToggleStatus = (id: number) => {
//     setEmployees((prevEmployees) =>
//       prevEmployees.map((employee) =>
//         employee.id === id
//           ? { ...employee, status: employee.status === 'active' ? 'freeze' : 'active' }
//           : employee
//       )
//     );
//   };

//   const handleEditEmployee = (employee: Employee) => {
//     setSelectedEmployee(employee);
//     setShowAddEditModal(true);
//   };

//   const handleSaveEmployee = (data: Partial<Employee>) => {
//     if (selectedEmployee) {
//       handleEditExistingEmployee(data);
//     } else {
//       handleAddNewEmployee(data);
//     }
//   };

//   const handleAddNewEmployee = (data: Partial<Employee>) => {
//     const maxId = Math.max(...employees.map((emp) => emp.id), 0);
//     const newEmployee: Employee = {
//       id: maxId + 1,
//       name: data.name || 'New Employee',
//       age: data.age || 0,
//       salary: data.salary || 0,
//       status: 'active',
//       phoneNumber: data.phoneNumber || 0,
//       ...(data.pages ? { pages: [...data.pages] } : {}),
//     };
//     setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
//     handleCloseAddEditModal();
//   };

//   const handleEditExistingEmployee = (data: Partial<Employee>) => {
//     setEmployees((prevEmployees) =>
//       prevEmployees.map((employee) =>
//         employee.id === selectedEmployee!.id ? { ...employee, ...data } : employee
//       )
//     );
//     handleCloseAddEditModal();
//   };

//   return (
//     <div className="container mt-5">
//       <div className="justify-content-end mb-3">
//         <Button variant="primary" onClick={() => setShowAddEditModal(true)}>إضافة موظف</Button>
//       </div>
//       <div className="table-responsive" style={{ marginRight: '80px' }}>
//       <Table striped bordered hover dir="rtl">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>الإسم</th>
//             <th>العمر</th>
//             <th>رقم الهاتف</th>
//             <th>الراتب</th>
//             <th>الصلاحيات</th>
//             <th>الحالة</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.id}</td>
//               <td onClick={() => handleEditEmployee(employee)} style={{ color: '#00a3f0', cursor: 'pointer' }}>{employee.name}</td>
//               <td>{employee.age}</td>
//               <td>{employee.phoneNumber}</td>
//               <td>{employee.salary}</td>
//               <td>{employee.pages?.join(' - ') || 'لا يوجد'}</td>
//               <td style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <span style={{ color: employee.status === 'active' ? 'green' : 'red' }}>{employee.status}</span>
//                 <ToggleButton
//                   id={`toggle-${employee.id}`}
//                   type="checkbox"
//                   variant={employee.status === 'active' ? 'danger' : 'success'}
//                   checked={employee.status === 'active'}
//                   onChange={() => handleToggleStatus(employee.id)}
//                   value={employee.status === 'active' ? 'active' : 'freeze'}
//                 >
//                   {employee.status === 'active' ? 'تجميد' : 'تنشيط'}
//                 </ToggleButton>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       </div>
//       <EmployeeModal
//         show={showAddEditModal}
//         onHide={handleCloseAddEditModal}
//         onSave={handleSaveEmployee}
//         employee={selectedEmployee}
//         employees={employees}
//         selectedPages={selectedPages}
//         setSelectedPages={setSelectedPages}
//       />
//     </div>
//   );
// };

// export default Employees;
const Employees: React.FC = () => {
return (
  <div className="container mt-5">
   <h1>Employees</h1>
  </div>
);
};

export default Employees;