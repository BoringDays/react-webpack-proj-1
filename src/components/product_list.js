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
import Axios from 'axios';
import '../../public/stylesheets/common.scss';

class ProductList extends Component {
  constructor(props) {
    super(props);

    //this.states = {};

    Axios.get('/api/product').then((res) => {
      console.log(res);
    }).catch((res) => {
      debugger;
    });
  }

  //componentWillMount() {
  //
  //}

  render() {
    return (
      <div>
        <Table selectable={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Details</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>Product 1</TableRowColumn>
              <TableRowColumn>A</TableRowColumn>
              <TableRowColumn>
                <Link to="/product/1" activeStyle={{color: '#333'}}>details</Link>
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
