import React, { Fragment, useState } from "react";
import Swal from 'sweetalert2';

import "./ObtainAll.css";

const ObtainAll = () => {
  //state
  const [employees, setEmployees] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const url = "http://dummy.restapiexample.com/api/v1/employees";

    const response = await fetch(url);
    const result = await response.json();
    
    console.log('esta es la data async await', result);
    setEmployees(result);
  };

  const handleDeleteRow = id => {
    console.log("diste click en el botón: ", id);
    const arrState = [...employees];
    console.log("este es el array state", arrState);

    const filteredArr = arrState.filter(value => {
      return value.id !== id;
    });

    console.log("array filtered", filteredArr);
    setEmployees(filteredArr);

    Swal.fire(
      'Good job!',
      'You have deleted that record',
      'success'
    )

    //ya se ha eliminado visualmente, ahora eliminarlo desde la base de datos haciendo el request a la API
    fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: "1" })
    })
      .then(res => res.json())
      .then(res => console.log(res));
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
                  <h3 className="text-center">Obtain All Employees</h3>
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="createAccount">
                      <button type="submit">display the employee's info</button>
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
                <tbody id="contenido">
                  {employees.map((row, index) => {
                    return (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.employee_name}</td>
                        <td>{row.employee_salary}</td>
                        <td>{row.employee_age}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => handleDeleteRow(row.id)}
                            className="btn btn-outline-danger"
                          >
                            eliminar
                          </button>
                        </td>
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

export default ObtainAll;
