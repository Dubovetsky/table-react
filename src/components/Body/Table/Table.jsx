import React from 'react';
import '../../../App.css'
import { Table } from 'react-bootstrap';

const TableApp = (props) => {
  return (
    <Table striped bordered hover className="table" style={{ cursor: "pointer" }}>
      <thead>
        <tr>
          <th onClick={props.onSort.bind(this, "id")}>
            ID {props.sortField === "id" ? <big>{props.sort}</big> : null}
          </th>
          <th onClick={props.onSort.bind(this, "firstName")}>
            First Name {props.sortField === "firstName" ? <big>{props.sort}</big> : null}
          </th>
          <th onClick={props.onSort.bind(this, "lastName")}>
            Last Name {props.sortField === "lastName" ? <big>{props.sort}</big> : null}
          </th>
          <th onClick={props.onSort.bind(this, "email")}>
            E-mail {props.sortField === "email" ? <big>{props.sort}</big> : null}
          </th>
          <th onClick={props.onSort.bind(this, "phone")}>
            Phone {props.sortField === "phone" ? <big>{props.sort}</big> : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, key) => (
          <tr
            key={item.id + item.phone + key}
            onClick={props.onRowSelect.bind(this, item)}
          >
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableApp;