import { Card } from 'react-bootstrap';

const Product = ({img, title, description,price}) => {
  return (
    <div className="d-flex justify-content-center align-items-center" >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product
