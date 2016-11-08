import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  // TableFooter,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { Link } from 'react-router';
import './../asserts/stylesheets/common.scss';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Table selectable={false} >
          <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Details</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            <TableRow>
              <TableRowColumn>Product 1</TableRowColumn>
              <TableRowColumn>A</TableRowColumn>
              <TableRowColumn>
                <Link to="/product/1" activeStyle={{ color: '#333' }} >details</Link>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Product 2</TableRowColumn>
              <TableRowColumn>B</TableRowColumn>
              <TableRowColumn>
                <Link to="/product/2" activeStyle={{ color: '#333' }} >details</Link>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        {this.props.children}
      </div>
    );
  }
}

ProductList.propTypes = {
  children: React.PropTypes.object
};

export default ProductList;
