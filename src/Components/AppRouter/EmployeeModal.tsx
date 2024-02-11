// // EmployeeModal.tsx
// import React, { useState, useEffect } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import { Employee } from './Employees';
// import Select from 'react-select';

// interface EmployeeModalProps {
//     show: boolean;
//     onHide: () => void;
//     onSave: (data: Partial<Employee>) => void;
//     employee: Employee | null;
//     employees: Employee[];
//     selectedPages: Record<number, string[]>;
//     setSelectedPages: React.Dispatch<React.SetStateAction<Record<number, string[]>>>;
// }

// const EmployeeModal: React.FC<EmployeeModalProps> = ({ show, onHide, onSave, employee, employees, selectedPages, setSelectedPages }) => {
//     const [employeeData, setEmployeeData] = useState<Partial<Employee>>({});
//     const [isUser, setIsUser] = useState(false);
//     const pages = ['الموظفين', 'البيع', 'التوريد', 'المصروفات', 'الإنتاج', 'التحصيل', 'الموردين', 'العملاء'];


//     const handleIsUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setIsUser(e.target.checked);
//     };

//     const handlePageSelectionChange = (selectedOptions: any) => {
//         const selectedPages = selectedOptions.map((option: any) => option.value);
//         setEmployeeData((prevEmployeeData) => ({
//             ...prevEmployeeData,
//             pages: selectedPages,
//         }));
//         setSelectedPages((prevSelectedPages) => ({
//             ...prevSelectedPages,
//             [employeeData.id || 0]: selectedPages,
//         }));
//     };

//     useEffect(() => {
//         if (employee) {
//             setEmployeeData(employee);
//             setIsUser(!!employee.pages?.length);
//         }
//     }, [employee, employees]);

//     return (
//         <Modal show={show} onHide={onHide} dir="rtl">
//             <Modal.Header closeButton className="align-items-center">
//                 <div style={{ flex: 1, textAlign: 'center' }}>
//                     <Modal.Title>{employee ? 'تعديل الموظف' : 'إضافة موظف جديد'}</Modal.Title>
//                 </div>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group controlId="formName">
//                         <Form.Label style={{ alignItems: 'center', fontSize: '17px' }}>الإسم</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="الإسم"
//                             value={employeeData.name}
//                             onChange={(e) => setEmployeeData((prev) => ({ ...prev, name: e.target.value }))}
//                         />
//                         <Form.Label style={{ alignItems: 'center', marginTop: '10px', fontSize: '17px' }}>العمر</Form.Label>
//                         <Form.Control
//                             type="number"
//                             placeholder="العمر"
//                             value={employeeData.age}
//                             onChange={(e) => setEmployeeData((prev) => ({ ...prev, age: Number(e.target.value) }))}
//                         />
//                         <Form.Label style={{ alignItems: 'center', marginTop: '10px', fontSize: '17px' }}>رقم الهاتف</Form.Label>
//                         <Form.Control
//                             type="number"
//                             placeholder="رقم الهاتف"
//                             value={employeeData.phoneNumber}
//                             onChange={(e) => setEmployeeData((prev) => ({ ...prev, phoneNumber: Number(e.target.value) }))}
//                         />
//                         <Form.Label style={{ alignItems: 'center', marginTop: '10px', fontSize: '17px' }}>الراتب</Form.Label>
//                         <Form.Control
//                             type="number"
//                             placeholder="الراتب"
//                             value={employeeData.salary}
//                             onChange={(e) => setEmployeeData((prev) => ({ ...prev, salary: Number(e.target.value) }))}
//                         />
//                         <Form.Check
//                             type="checkbox"
//                             label=" هل هو مستخدم ؟"
//                             checked={isUser}
//                             onChange={handleIsUserChange}
//                             style={{ alignItems: 'center', marginTop: '10px', fontSize: '17px' }}
//                         />
//                         {isUser && (
//                             <Select
//                                 className="col-md-9"
//                                 placeholder=" حدد الصلاحيات ..."
//                                 isMulti
//                                 options={pages.map((page) => ({ value: page, label: page }))}
//                                 value={employeeData.pages ? employeeData.pages.map((page) => ({ value: page, label: page })) : []}
//                                 onChange={handlePageSelectionChange}
//                             />
//                         )}
//                     </Form.Group>
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="primary" onClick={() => onSave(employeeData)}>حفظ</Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default EmployeeModal;
const EmployeeModal: React.FC = () => {
    return (
      <div className="container mt-5">
       <h1>EmployeeModal</h1>
      </div>
    );
    };
    
    export default EmployeeModal;