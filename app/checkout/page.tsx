import FormWrap from "../components/FormWrap";
import CheckoutClient from "./checkoutClient";

const Checkout = () => {
  return (
    <div className="p-8">
      <div>
        <FormWrap>
          <CheckoutClient />
        </FormWrap>
      </div>
    </div>
  );
};

export default Checkout;
