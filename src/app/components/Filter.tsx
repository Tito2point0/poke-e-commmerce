const Filter = () => {
  return (
    <div className="mt-12 flex flex-col lg:flex-row justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="packs">Packs</option>
          <option value="ETB">Elite Trainer Boxes</option>
          <option value="booster">Booster Boxes</option>
          <option value="tins">Tins</option>
          <option value="singles">Singles</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-grey-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-grey-400"
        />
        <select
          name="value"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Value</option>
          <option value="-5000">Under 5000</option>
          <option value="-1000">Under 1000</option>
          <option value="-500">Under 500</option>
          <option value="-100">Under 100</option>
          <option value="-50">Under 50</option>
        </select>
        <select
          name="Grading"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Grade</option>
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8</option>
          <option value="7">7</option>
          <option value="6">6</option>
        </select>
        <select
          name="set"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Set</option>
          <option value="Paldean">Paldean Fates</option>
          <option value="Temporal">Temporal Forces</option>
          <option value="Twilight">Twilight Masquerade</option>
          <option value="Shrouded">Shrouded Fable</option>
          <option value="Stellar">Stellar Crown</option>
          <option value="Surging">Surging Sparks</option>
        </select>
      </div>
      <div className="mt-4 lg:mt-0 lg:ml-6">
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
