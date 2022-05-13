import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { map, filter, sortBy } from "lodash";
import { initialEmployees } from "./data";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState(initialEmployees);

  useEffect(() => {
    const employees = localStorage.getItem("employees");
    if (employees) setEmployees(JSON.parse(employees));
  }, []);

  const sortedEmployees = sortBy(employees, ('name'));

  const addEmployee = (name, email, address, phone) => {
    const addEmployee = [
      ...employees,
      { id: uuidv4(), name, email, address, phone },
    ];
    localStorage.setItem("employees", JSON.stringify(addEmployee));
    setEmployees(addEmployee);
  };

  const deleteEmployee = (id) => {
    const deleteEmployee = filter(employees, (employee) => employee.id !== id);
    localStorage.setItem("employees", JSON.stringify(deleteEmployee));
    setEmployees(deleteEmployee);
  };

  const editEmployee = (id, updatedEmployee) => {
    const editEmployee = map(employees, (employee) =>
      employee.id === id ? updatedEmployee : employee
    );
    localStorage.setItem("employees", JSON.stringify(editEmployee));
    setEmployees(editEmployee);
  };

  return (
    <EmployeeContext.Provider
      value={{ sortedEmployees, addEmployee, deleteEmployee, editEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
