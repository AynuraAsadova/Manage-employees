import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Tom Hanks",
      email: "tomhanks@gmail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "408-2222222",
    },
    {
      id: uuidv4(),
      name: "Jhon Doe",
      email: "jhondoe@mail.com",
      address: "Obere Str. 57, Berlin, Germany",
      phone: "(313) 111-5735",
    },
    {
      id: uuidv4(),
      name: "Anna Smith",
      email: "annasmith@mail.com",
      address: "25, rue Lauriston, Paris, France",
      phone: "(503) 555-9931",
    },
    {
      id: uuidv4(),
      name: "Peter Jones",
      email: "peterjones@mail.com",
      address: "C/ Araquil, 67, Madrid, Spain",
      phone: "(204) 619-5731",
    },
    {
      id: uuidv4(),
      name: "Martin Blank",
      email: "martinblank@mail.com",
      address: "Via Monte Bianco 34, Turin, Italy",
      phone: "(480) 631-2097",
    },
    {
      id: uuidv4(),
      name: "Thomas Hardy",
      email: "thomashardy@mail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
    },
    {
      id: uuidv4(),
      name: "Dominique Perrier",
      email: "dominiqueperrier@mail.com",
      address: "Obere Str. 57, Berlin, Germany",
      phone: "(313) 555-5735",
    },
    {
      id: uuidv4(),
      name: "Maria Anders",
      email: "mariaanders@mail.com",
      address: "25, rue Lauriston, Paris, France",
      phone: "(503) 555-9931",
    },
    {
      id: uuidv4(),
      name: "Fran Wilson",
      email: "franwilson@mail.com",
      address: "C/ Araquil, 67, Madrid, Spain",
      phone: "(204) 619-5731",
    },
  ]);

  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  useEffect(() => {
    const employees = localStorage.getItem("employees");
    setEmployees(JSON.parse(employees));
  }, []);

  const addEmployee = (name, email, address, phone) => {
    const addEmployee = [
      ...employees,
      { id: uuidv4(), name, email, address, phone },
    ];
    localStorage.setItem("employees", JSON.stringify(addEmployee));
    setEmployees(addEmployee);
  };

  const deleteEmployee = (id) => {
    const deleteEmployee = employees.filter((employee) => employee.id !== id);
    localStorage.setItem("employees", JSON.stringify(deleteEmployee));
    setEmployees(deleteEmployee);
  };

  const editEmployee = (id, updatedEmployee) => {
    const editEmployee = employees.map((employee) =>
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
