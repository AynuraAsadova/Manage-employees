import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Name *'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            type='email'
            placeholder='Email *'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            as='textarea'
            placeholder='Address *'
            name='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            type='phone'
            placeholder='Phone *'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button type='submit' variant='success' className='w-100'>
          Add New Employee
        </Button>
      </Form>
    </>
  );
};

export default AddForm;
