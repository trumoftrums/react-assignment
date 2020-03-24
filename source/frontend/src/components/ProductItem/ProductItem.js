import React from 'react';

class ProductItem extends React.Component {
    render() {
        let {index, product} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>
                    <a className="text-dark" href>
                        <img src={product.thumbnail} style={{width: "100px"}}/>
                    </a>
                </td>
                <td className="d-none d-md-table-cell">{product.name}</td>
                <td className="d-none d-md-table-cell">{product.created_at}</td>
                <td className="d-none d-md-table-cell">{product.updated_at}</td>
                <td>
                    <span className="badge badge-success">{product.status}</span>
                </td>
                <td className="text-right">
                    <div className="dropdown show d-inline-block widget-dropdown">
                        <a className="dropdown-toggle icon-burger-mini" href
                           role="button" id="dropdown-recent-order1"
                           data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false" data-display="static"/>
                        <ul className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdown-recent-order1">
                            <li className="dropdown-item">
                                <a href="#">View</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Remove</a>
                            </li>
                        </ul>
                    </div>
                </td>
            </tr>
        )
    }
}

export default ProductItem;