const Constant = () => {
  return (
    <div>
      <h1 className="text-3xl p-4 m-4 font-bold">Contact Us Page</h1>
      <form>
        <input
          className="border border-black m-4 p-2"
          type="text"
          placeholder="Name"
        />
        <input
          className="border border-black m-4 p-2"
          type="text"
          placeholder="message"
        />
        <button
          className="border border-black m-4 p-2 bg-green-200 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Constant;
