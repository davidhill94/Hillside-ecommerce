import Container from "../Container";

const Newsletter = () => {
  return (
    <div className="bg-light-grey w-full text-textPrimary">
      <Container>
        <div className="flex flex-col items-center justify-center py-sectionV">
          <h3 className="text-5xl text-textPrimary mb-6 text-center">
            Get notified when we release new products
          </h3>
          <p className="mb-2 italic text-center">Sign up to our Newsletter to keep up to date with all of our ongoings</p>
          <form className="flex items-center justify-center w-full lg:w-1/2 gap-6">
            <input
            type="text"
            placeholder="Enter your email to recieve updates"
            className="w-4/5 p-2 shadow-shadow-input border border-textPrimary rounded"
            data-lpignore
            ></input>
            <input
            type="submit"
            value="Notify Me"
            className="w-1/5 bg-textPrimary text-primaryColor border-textPrimary border p-2 cursor-pointer shadow-input"
            >
            </input>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
