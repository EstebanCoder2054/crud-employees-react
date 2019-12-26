import React, { Fragment, useState } from "react";
//import axios from "axios";
import Swal from "sweetalert2";

const Create = () => {
  //state
  const [employees, setEmployees] = useState([]);
  const [employeesNew, setEmployeesNew] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState(0);
  const [employeeSalary, setEmployeeSalary] = useState(0);
  const [employeeAge, setEmployeeAge] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    if (employeeName === "" || employeeAge === 0 || employeeSalary === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to fill the fields properly, son",
        footer: "<a href>Why do I have this issue?</a>"
      });
      return;
    }
    //si el formulario se llena correctamente
    const urlObtainAll = "http://dummy.restapiexample.com/api/v1/employees";

    const response = await fetch(urlObtainAll);
    const result = await response.json();

    setEmployees(result);

    const newArray = {
      id: employeeId,
      employee_name: employeeName,
      employee_salary: employeeSalary,
      employee_age: employeeAge
    };
    const fullArray = [...result, newArray];
    const fullunshift = fullArray.unshift(newArray);

    setEmployeesNew(fullArray);

    console.log("result", result);
    console.log("full array", fullArray);
    console.log('id', employeeId);
    console.log("name", employeeName);
    console.log("salary", employeeSalary);
    console.log("age", employeeAge);

    const urlCreate = "http://dummy.restapiexample.com/api/v1/create";
    fetch(urlCreate, {
      method: "POST",
      headers: new Headers(),
      body: {
        id: employeeId,
        employee_name: employeeName,
        employee_salary: employeeSalary,
        employee_age: employeeAge,
        profile_image: ""
      },
      mode: "no-cors"
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

      Swal.fire(
        'Good job!',
        'You just created a new empliyee, great job',
        'success'
      )
  };

  return (
    <Fragment>
      <div className="container">
        {/* para que sea más centrado */}
        <div className="container mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/*Formulario con campos ya validados*/}

                <div className="form-wrapper">
                  <h3 className="text-center">Create a new employee</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="name">
                      <label htmlFor="name">ID</label>
                      <input
                        placeholder="Employee ID"
                        type="number"
                        name="id"
                        onChange={e => setEmployeeId(e.target.value)}
                      />
                    </div>

                    <div className="name">
                      <label htmlFor="name">Name</label>
                      <input
                        placeholder="Employee name"
                        type="text"
                        name="name"
                        onChange={e => setEmployeeName(e.target.value)}
                      />
                    </div>

                    <div className="salary">
                      <label htmlFor="name">Salary</label>
                      <input
                        placeholder="Employee Salary"
                        type="number"
                        name="salary"
                        onChange={e => setEmployeeSalary(e.target.value)}
                      />
                    </div>

                    <div className="age">
                      <label htmlFor="name">Age</label>
                      <input
                        placeholder="Employee Age"
                        type="number"
                        name="age"
                        onChange={e => setEmployeeAge(e.target.value)}
                      />
                    </div>

                    <div className="createAccount">
                      <button type="submit">Create a new employee</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* table part */}
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {employeesNew.map(row => {
                    return (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.employee_name}</td>
                        <td>{row.employee_salary}</td>
                        <td>{row.employee_age}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;

// const objPrueba = {
//   employee_name: "Esteban",
//   employee_salary: "1234",
//   employee_age: "20",
//   profile_image: ""
// };

// const handleCreate = e => {
//   console.log("tocaste");

//   e.preventDefault();

//   fetch("http://dummy.restapiexample.com/api/v1/create", {
//     method: "POST",
//     headers: new Headers(),
//     body: {
//       // id: "123987467",
//       employee_name: "esteban escobar",
//       employee_salary: "1200",
//       employee_age: "20",
//       profile_image: ""
//     },
//     mode: "no-cors"
//   })
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
