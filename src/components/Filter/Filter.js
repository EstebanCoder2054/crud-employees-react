import React, { Fragment, useState } from "react";
//import axios from "axios";
import Swal from "sweetalert2";
import "./Filter.css";

const Filter = () => {
  //state
  const [employees, setEmployees] = useState([]);
  const [filteredEmployeesId, setFilteredEmployeesId] = useState([]);
  const [filteredEmployeesName, setFilteredEmployeesName] = useState([]);
  const [filteredEmployeesSalary, setFilteredEmployeesSalary] = useState([]);
  const [filteredEmployeesAge, setFilteredEmployeesAge] = useState([]);
  const [employeeId, setEmployeeId] = useState(0);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState(0);
  const [employeeAge, setEmployeeAge] = useState(0);


  const handleSubmit = async e => {
    e.preventDefault();
    if (
      employeeName === "" &&
      employeeAge === 0 &&
      employeeSalary === 0 &&
      employeeId === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to fill at least one field, son",
        footer: "<a href>Why do I have this issue?</a>"
      });
      return;
    }

    //si el formulario se llena correctamente
    const urlObtainAll = "http://dummy.restapiexample.com/api/v1/employees";
    const response = await fetch(urlObtainAll);
    const result = await response.json();

    setEmployees(result);

    console.log("id", employeeId);
    console.log("name", employeeName);
    console.log("salary", employeeSalary);
    console.log("age", employeeAge);

    const arrCopia = [...result];

    console.log("esta es la copia", arrCopia);
    // -----------------
    // ID
    const filteredArrayId = arrCopia.filter(value => {
      if (value.id === employeeId) {
        return value;
      } 
    });
    console.log("el array filtrado de id es", filteredArrayId);
    setFilteredEmployeesId(filteredArrayId);

    // ----------------
    // Name
    const filteredArrayName = arrCopia.filter(valor => {
      if (valor.employee_name.toLowerCase() === employeeName.toLowerCase()) {
        return valor;
      } 
    });
    console.log("el array filtrado de name es", filteredArrayName);
    setFilteredEmployeesName(filteredArrayName);


  //  -----------------
  //  Salary 
  const filteredArraySalary = arrCopia.filter(value => {
    if (value.employee_salary === employeeSalary) {
      return value;
    } 
  });
  console.log("el array filtrado de salary es", filteredArraySalary);
  setFilteredEmployeesSalary(filteredArraySalary);

  // --------------
  // Age
  const filteredArrayAge = arrCopia.filter(value => {
    if (value.employee_age === employeeAge) {
      return value;
    } 
  });
  console.log("el array filtrado de age es", filteredArrayAge);
  setFilteredEmployeesAge(filteredArrayAge);

  };

  return (
    <Fragment>
      <div className="container">
        {/* para que sea más centrado */}
        <div className="container mt-5">
          <div className="container">
            <form className="justify-content-center" onSubmit={handleSubmit}>
              <div className="form-wrapper-filter mx-5">
                <h3 className="text-center" style={{background: '#f7d794'}}>Search By Id</h3>

                <div className="name">
                  <label htmlFor="name">ID</label>
                  <input
                    placeholder="Employee ID"
                    type="number"
                    name="id"
                    onChange={e => setEmployeeId(e.target.value)}
                  />
                </div>
              </div>

              {/* ----- */}

              <div className="form-wrapper-filter mx-5">
                <h3 className="text-center" style={{background: '#ea8685'}}>Search by Name</h3>

                <div className="name">
                  <label htmlFor="name">name</label>
                  <input
                    placeholder="Employee Name"
                    type="text"
                    name="name"
                    onChange={e => setEmployeeName(e.target.value)}
                  />
                </div>
              </div>

              {/* -------- */}

              <div className="form-wrapper-filter mx-5">
                <h3 className="text-center" style={{background: '#3dc1d3'}}>Search by Salary</h3>

                <div className="name">
                  <label htmlFor="salary">salary</label>
                  <input
                    placeholder="Employee salary"
                    type="number"
                    name="salary"
                    onChange={e => setEmployeeSalary(e.target.value)}
                  />
                </div>
              </div>

              {/* ------- */}

              <div className="form-wrapper-filter mx-5">
                <h3 className="text-center" style={{background: '#f78fb3'}}>Search by Age</h3>

                <div className="age">
                  <label htmlFor="age">age</label>
                  <input
                    placeholder="Employee Age"
                    type="number"
                    name="age"
                    onChange={e => setEmployeeAge(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className=" mr-2 mb-2 btn btn-outline-dark "
                >
                  SEARCH
                </button>
              </div>
            </form>

            {/* tabla de búsqueda de ID */}
            <h1 className="text-center my-3" style={{background: '#f7d794'}}>search table by id</h1>
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
                  {filteredEmployeesId.map(row => {
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

            {/* tabla de búsqueda de Name */}
            <h1 className="text-center my-3" style={{background: '#ea8685'}}>search table by name</h1>
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
                  {filteredEmployeesName.map(row => {
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

            {/* tabla de búsqueda de salary */}
            <h1 className="text-center my-3" style={{background: '#3dc1d3'}}>search table by salary</h1>
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
                  {filteredEmployeesSalary.map(row => {
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

            {/* tabla de búsqueda de age */}
            <h1 className="text-center my-3" style={{background: '#f78fb3'}}>search table by age</h1>
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
                  {filteredEmployeesAge.map(row => {
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

export default Filter;

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
