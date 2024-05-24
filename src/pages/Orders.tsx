import { Heading } from "@components/common";
import { Table, Modal } from "react-bootstrap";
import { Loading } from "@components/feedback";
import { ProductInfo } from "@components/eCommerce";
import useOrders from "@hooks/useOrders";

function Orders() {
  const {
    loading,
    error,
    showModal,
    closeModalHandler,
    selectProduct,
    viewDetailsHandler,
    orderList,
  } = useOrders();

  const orderItems = orderList.map((el) => {
    return (
      <tr key={el.id}>
        <td>#{el.id}</td>
        <td>
          {el.items.length} item(s)
          {" / "}{" "}
          <span
            onClick={() => viewDetailsHandler(el.id)}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Product Details
          </span>
        </td>
        <td>{el.subtotal.toFixed(2)} $</td>
      </tr>
    );
  });

  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectProduct.map((el) => (
            <ProductInfo
              key={el.id}
              title={el.title}
              img={el.img}
              price={el.price}
              quantity={el.quantity}
              direction="column"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </Modal.Body>
      </Modal>
      <Heading title="My Order" />
      <Loading states={loading} error={error} type="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>{orderItems}</tbody>
        </Table>
      </Loading>
    </>
  );
}

export default Orders;
