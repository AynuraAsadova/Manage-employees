import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <OverlayTrigger placement='top' overlay={<Tooltip>Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className='btn text-warning btn-act edit'
            data-toggle='modal'
          >
            <i className='material-icons'>&#xE254;</i>
          </button>
        </OverlayTrigger>

        <OverlayTrigger placement='top' overlay={<Tooltip>Delete</Tooltip>}>
          <button
            onClick={() => deleteEmployee(employee.id)}
            className='btn text-danger btn-act delete'
            data-toggle='modal'
          >
            <i className='material-icons'>&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant='secondary'>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
