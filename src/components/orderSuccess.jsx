
import './OrderSuccess.css';

const OrderSuccess = () => {
  const orderId = `ORD-${Date.now()}`;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const formattedDate = deliveryDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const handleHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="success-bg d-flex justify-content-center align-items-center min-vh-100">
      <div className="success-card p-5 rounded-5 shadow-lg text-center animate-fade">
        <div className="check-icon mb-4">✔️</div>
        <h2 className="fw-bold text-gradient mb-3 animate-slideUp">Order Placed Successfully!</h2>
        <p className="text-secondary fs-5 mb-2">Thank you for your purchase.</p>
        <div className="order-info mt-4">
          <p><strong>🆔 Order ID:</strong> <span className="text-dark">{orderId}</span></p>
          <p><strong>📦 Delivery by:</strong> <span className="text-primary">{formattedDate}</span></p>
        </div>
        <button onClick={handleHome} className="btn btn-primary mt-4 px-5 py-2 fw-semibold shadow-sm glow-hover">
          🏠 Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
