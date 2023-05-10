export default function ItemModalContent() {
  return (
    <>
      <div className="columns">
        <div className="column is-8">
          <h1 className="is-size-3">Apple Iphone 11</h1>
        </div>
        <div className="column is-2">
          <h1 className="is-size-3 has-text-centered">$699</h1>
        </div>
        <div className="column is-2">
          <h1 className="is-size-3 has-text-centered">8</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column is-5">
          <p>
            <b>This item in cart:</b> 1
          </p>
        </div>
        <div className="column is-7">
          <button className="button is-primary mr-1 is-pulled-right">
            Add to cart
          </button>
          <button className="button is-warning mr-1 is-pulled-right">
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
}
