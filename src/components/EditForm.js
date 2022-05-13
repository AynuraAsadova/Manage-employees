import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = ({ theEmployee }) => {
  const { editEmployee } = useContext(EmployeeContext);

  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const updatedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    editEmployee(id, updatedEmployee);
  };

  return (
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
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          as='textarea'
          placeholder='Address *'
          value={address}
          name='address'
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          type='phone'
          placeholder='Phone *'
          value={phone}
          name='phone'
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button type='submit' variant='success' className='w-100'>
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
