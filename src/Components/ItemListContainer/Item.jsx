import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
    <div className=" d-flex justify-content-center mt-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Text>
            Stock: {product.stock}
          </Card.Text>
          <Link to={`/product/${product.id}`}>
          <Button variant="primary">Ver detalle del producto</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item
