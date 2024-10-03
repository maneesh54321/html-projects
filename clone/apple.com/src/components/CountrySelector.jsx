const CountryDropdown = () => {
  return <></>;
};

const CountrySelector = () => {
  return (
    <>
      <div className="bg-stone-700 py-5 flex justify-center">
        <p className="w-1/2 text-sm text-wrap pr-4 max-w-md">
          Choose another country or region to see content specific to your
          location and shop online
        </p>
        <div className="flex justify-end gap-4">
          <select
            name="country"
            id="country"
            className="bg-stone-600 px-3 rounded-lg flex-1 min-w-64 max-w-sm"
          >
            <option value="India">India</option>
            <option value="others">Other country or region</option>
          </select>
          <a className="text-black bg-white py-2 px-4 rounded-lg">Continue</a>
          <button>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="3.5 15, 15 3.5"
              ></polyline>
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="3.5 3.5, 15 15"
              ></polyline>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CountrySelector;
