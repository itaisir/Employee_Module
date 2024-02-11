// import React, { useEffect, useState } from 'react';
// import { Button, Form, Row, Col } from 'react-bootstrap';
// import CustomDropdown, { IDropDownItem } from '../Common/CustomDropdown.tsx';

// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
// }
// const CustomInput = ({ controlId, label, type, placeholder, value, onChange }) => {
//     return (
//         <Form.Group controlId={controlId}>
//             <Form.Label>{label}</Form.Label>
//             <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
//         </Form.Group>
//     );
// };

// const Sales: React.FC = () => {
//     const [selectedCustomer, setSelectedCustomer] = useState<IDropDownItem | null>(null);
//     const [selectedStore, setSelectedStore] = useState<IDropDownItem|null >(null);
//     const [selectedProduct, setSelectedProduct] = useState<IDropDownItem | null>(null);
//     const [selectedPrecentage,setSelectedPrecentage] = useState<IDropDownItem|null>(null);
//     const [productPrice, setProductPrice] = useState<number>(0);
//     const [productQuantity, setProductQuantity] = useState<number>(0);
//     const [productQuantityInStore, setProductQuantityInStore] = useState<number>(100);
//     const [discountType, setDiscountType] = useState<'fixed' | 'percentage'>();
//     const [finalPrice, setFinalPrice] = useState<number>(0);
//     const [paymentType, setPaymentType] = useState<'full' | 'partial'>('full');
//     const [totalMoney, setTotalMoney] = useState<number>(0);
//     const [debt, setDebt] = useState<number>(0);
//     const [maxDebt, setMaxDebt] = useState<number>(1000);
//     const [showPercentageDropdown, setShowPercentageDropdown] = useState<boolean>(false);
    
    
//     const percentageOptions:IDropDownItem[] = [
//         { id: 1, name: '5%' },{ id: 2, name: '10%' },{ id: 3, name: '15%' },{ id: 4, name: '20%' },{ id: 5, name: '25%' },{ id: 6, name: '30%' },{ id: 7, name: '35%' }
//     ];
//     const products:IDropDownItem[] = [
//         { id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }, { id: 3, name: 'Product 3' }, { id: 4, name: 'Product 4' }

//     ];
//     const customers: IDropDownItem[] = [
//         { id: 1, name: 'Customer 1' }, { id: 2, name: 'Customer 2' }, { id: 3, name: 'Customer 3' }, { id: 4, name: 'Customer 4' }, { id: 5, name: 'Customer 5' }
//     ];
//     const stores: IDropDownItem[] = [
//         { id: 1, name: 'Store 1' }, { id: 2, name: 'Store 2' }, { id: 3, name: 'Store 3' }, { id: 4, name: 'Store 4' }, { id: 5, name: 'Store 5' }
//     ];
//     const handleAddProduct = () => {
//         if (selectedProduct && selectedStore && selectedCustomer) {
//         }
//     };
//     const handleDiscountTypeChange = (type: 'fixed' | 'percentage') => {
        
//         setDiscountType(type);
//         handleCalculateDiscount();
//         setShowPercentageDropdown(type === 'percentage');
//     };
//     const handleCalculateDiscount = () => {
//        if(selectedProduct && productPrice && discountType==='fixed'){
//         setFinalPrice(productPrice-500)
//        }
//        else{
//         setFinalPrice(productPrice-(productPrice*parseInt(selectedPrecentage?selectedPrecentage.name.replace('%', ''):'', 10)/100))
//        }
//     };

//     const handleCalculateDebt = () => {
//         // Add logic for calculating and updating debt
//     };

//     const handleProductSelection = () => {
//         // Add logic for handling product selection and displaying quantity
//     };

//     useEffect(() => {
//         console.log(selectedCustomer?.name);
//     }, [selectedCustomer]);

//     return (
//         <div className="container mt-5">
//             <div className="table-responsive" style={{ marginRight: '100px', direction: 'rtl' }}>

//                 <Form>
//                     <Row className="justify-content-end">
//                         <Col>
//                             <CustomDropdown
//                                 controlId="customerDropdown"
//                                 label="اختيار العميل"
//                                 options={customers}
//                                 onChange={(selectedOption) => {setSelectedCustomer(selectedOption)}}
//                             />
//                         </Col>
//                         <Col>
//                             <CustomDropdown
//                                 controlId="storeDropdown"
//                                 label="اختيار المخزن"
//                                 options={stores}
//                                 onChange={(selectedOption) => {setSelectedStore(selectedOption)}}
//                             />
//                         </Col>
//                     </Row>
//                     <Row className="justify-content-end">
//                         <Col>
//                             <CustomDropdown
//                                 controlId="productDropdown"
//                                 label="اختيار المنتج"
//                                 options={products}
//                                 onChange={(selectedOption) => setSelectedProduct(selectedOption)}
//                             />
//                         </Col>
//                         <Col>
//                             <CustomInput
//                                 controlId="productPrice"
//                                 label="سعر المنتج"
//                                 type="number"
//                                 placeholder="أدخل سعر المنتج"
//                                 value={productPrice}
//                                 onChange={(e) => setProductPrice(Number(e.target.value))}
//                             />
//                         </Col>
//                         <Col>
//                             <CustomInput
//                                 controlId="productQuantity"
//                                 label="كمية المنتج"
//                                 type="number"
//                                 placeholder="أدخل كمية المنتج"
//                                 value={productQuantity}
//                                 onChange={(e) => setProductQuantity(Number(e.target.value))}
//                             />
//                         </Col>
//                     </Row>
//                     <Row className="justify-content-start">
//                         <Col>
//                             <Button onClick={handleAddProduct}>إضافة منتج</Button>
//                         </Col>
//                     </Row>
//                     <Col xs={12} md={6} className="rounded p-3 border mt-3">
//                     <Form.Label>نوع الخصم</Form.Label>
//                     <div className="d-flex">
//                         <Form.Check
//                             inline
//                             type="radio"
//                             label="ثابت"
//                             checked={discountType === 'fixed'}
//                             onChange={() => handleDiscountTypeChange('fixed')}
//                         />
//                         <Form.Check
//                             inline
//                             type="radio"
//                             label="نسبة"
//                             checked={discountType === 'percentage'}
//                             onChange={() => handleDiscountTypeChange('percentage')}
//                         />
//                     </div>
//                     {showPercentageDropdown && (
//                         <CustomDropdown
//                             controlId="percentageDropdown"
//                             label="اختيار النسبة"
//                             options={percentageOptions}
//                             onChange={(selectedOption) => setSelectedPrecentage(selectedOption)}
//                         />
//                     )}
//                     <Col xs={12} md={6}>
//                         <Form.Label>المبلغ النهائي</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 placeholder="المبلغ النهائي"
//                                 value={finalPrice}
//                                 readOnly
//                             />
//                     </Col>
//                 </Col>

//                     <Row className="justify-content-end">
//                         <Col>
//                             <Form.Check
//                                 type="radio"
//                                 label="الدفع الكامل"
//                                 checked={paymentType === 'full'}
//                                 onChange={() => setPaymentType('full')}
//                             />
//                             <Form.Check
//                                 type="radio"
//                                 label="الدفع الجزئي"
//                                 checked={paymentType === 'partial'}
//                                 onChange={() => setPaymentType('partial')}
//                             />
//                         </Col>
//                     </Row>
//                     <Row className="justify-content-end">
//                         <Col>
//                             <Form.Label>المبلغ الإجمالي</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 placeholder="المبلغ الإجمالي"
//                                 value={totalMoney}
//                                 readOnly
//                             />
//                         </Col>
//                         <Col>
//                             <CustomInput
//                                 controlId="debt"
//                                 label="الدين"
//                                 type="number"
//                                 placeholder="الدين"
//                                 value={debt}
//                                 onChange={(e) => setDebt(Number(e.target.value))}
//                             />
//                         </Col>
//                         <Col>
//                             <CustomInput
//                                 controlId="maxDebt"
//                                 label="الحد الأقصى للدين"
//                                 type="number"
//                                 placeholder="الحد الأقصى للدين"
//                                 value={maxDebt}
//                                 onChange={(e) => setMaxDebt(Number(e.target.value))}
//                             />
//                         </Col>
//                     </Row>
//                     {selectedProduct && selectedStore && (
//                         <Row className="justify-content-end">
//                             <Col>
//                                 <Form.Group controlId="productQuantityDisplay">
//                                     <Form.Label>كمية المنتج في {selectedStore.name}</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="الإجمالي"
//                                         value={productQuantityInStore}
//                                         readOnly
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                     )}
//                     <Row className="justify-content-end">
//                         <Col>
//                             <Button variant="primary" type="submit">حفظ</Button>
//                         </Col>
//                     </Row>
//                 </Form>
//             </div>
//         </div>
//     );
// };

// export default Sales;

const Sales: React.FC = () => {
    return (
      <div className="container mt-5">
       <h1>Sales</h1>
      </div>
    );
    };
    
    export default Sales;