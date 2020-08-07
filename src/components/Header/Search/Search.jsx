import React from 'react';
import { Form, Dropdown, Table } from 'react-bootstrap';
const Search = (props) => {
  let form = props.newItem.createItem;

  const valueChangeHandler = event => {
    props.onSearch(event.target.value)
    props.pageChangeReset();
  }

  const onChange = key => {
    return (event) => {
      let { value } = event.target;
      let result = { [key]: value };
      props.createItemData(result);
    }
  }

  const handleClose = () => {
    props.addItemData()
  }
  
  return (
    <div>
      {props.size > 0 && <div className='b1'>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Add Item
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Form key={props.size}>
              <Table striped bordered variant="info">
                <tbody>
                  <tr>
                    <td><Form.Control className="w-auto" type="number" placeholder="id: 0 to 9" defaultValue={form.id} onChange={onChange('id')} /></td>
                  </tr>
                  <tr>
                    <td><Form.Control className="w-auto" type="text" placeholder="FirstName: " defaultValue={form.firstName} onChange={onChange('firstName')} /></td>
                  </tr>
                  <tr>
                    <td><Form.Control className="w-auto" type="text" placeholder="LastName: " defaultValue={form.lastName} onChange={onChange('lastName')} /></td>
                  </tr>
                  <tr>
                    <td><Form.Control className="w-auto" type="email" placeholder="Email: name@example.com" defaultValue={form.email} onChange={onChange('email')} /></td>
                  </tr>
                  <tr>
                    <td><Form.Control className="w-auto" type="tel" placeholder="Phone: (123)456-7890" defaultValue={form.phone} onChange={onChange('phone')} /></td>
                  </tr>
                </tbody>
              </Table>
              {props.newItem.validItem && <Dropdown.Item active onClick={handleClose} >Add</Dropdown.Item>}
            </Form>
          </Dropdown.Menu>
        </Dropdown>
      </div>}
      <div className='b2'>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={valueChangeHandler}
            value={props.search}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;