import React, { useState } from "react";
import Pageheader from "../../components/utilitis/Pageheader";
const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    town: "",
    country: "",
    postcode: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can access the form data from the state variable `formData`
    console.log(formData);
    // You can further process the data as needed, such as sending it to an API
  };
  return (
    <div>
      <div>
        <Pageheader />
      </div>
      <div className="mt-32 mb-32 max-w-[1240px] px-5 mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-[28px] font-bold text-black">
              Billing Details
            </h1>
            <div className="mt-10">
              <div className="flex flex-col gap-4 mt-8 ">
                <label className="text-[20px]" htmlFor="name">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="text-black border focus:outline-none border-[#555555] py-6 px-4"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <label className="text-[20px]" htmlFor="address">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  className="text-black border focus:outline-none border-[#555555] py-6 px-4"
                  placeholder="Street address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <label className="text-[20px]" htmlFor="town">
                  Town / City *
                </label>
                <input
                  type="text"
                  id="town"
                  className="text-black border focus:outline-none border-[#555555] py-6 px-4"
                  placeholder="Town/City"
                  value={formData.town}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="flex flex-col gap-4 mt-8">
                  <label className="text-[20px]" htmlFor="country">
                    State /Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="text-black border focus:outline-none border-[#555555] py-6 px-4"
                    placeholder="State/Country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <label className="text-[20px]" htmlFor="postcode">
                    Postcode / Zip *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    className="text-black border focus:outline-none border-[#555555] py-6 px-4"
                    placeholder="Postcode / Zip"
                    value={formData.postcode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="flex flex-col gap-4 mt-8">
                  <label className="text-[20px]" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="text-black border focus:outline-none border-[#555555] py-6 px-4"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col  gap-4 mt-8">
                  <label className="text-[20px]" htmlFor="phone">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="text-black border focus:outline-none border-[#555555] py-6 px-4"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border p-10 border-[#888787]">
            <h1 className="text-[28px]  font-bold text-black border-b-[1px]">
              Your Order
            </h1>
            <div>
              <table className="w-full">
                <thead className="">
                  <tr className="border-b-[1px] border-[#888787] flex justify-between items-center mt-10">
                    <th className="text-[22px]">Product</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody className="flex flex-col gap-5 mt-10">
                  <tr className="border-b-[1px] border-[#888787] flex justify-between items-center text-[18px] font-semibold text-[#555555]">
                    <tr className="text-[18px] font-semibold text-[#555555]">
                      Alesander sofa x 1
                    </tr>
                    <tr className="text-[18px] font-semibold text-[#555555]">
                      $ 20
                    </tr>
                  </tr>
                  <tr className="border-b-[1px] border-[#888787] flex justify-between items-center">
                    <tr className="text-[18px] font-semibold text-[#555555]">
                      Alesander sofa x 1
                    </tr>
                    <tr className="text-[18px] font-semibold text-[#555555]">
                      $ 20
                    </tr>
                  </tr>
                  <tr className="border-b-[1px] border-[#888787] flex justify-between items-center">
                    <tr className="text-[18px] font-semibold text-[#555555]">
                      Alesander sofa x 1
                    </tr>
                    <tr className="text-[18px] font-semibold text-[#555555]">
                      $ 20
                    </tr>
                  </tr>
                  <tr className="border-b-[1px] border-[#888787] flex justify-between items-center text-[20px]">
                    <tr className="font-bold">Total</tr>
                    <tr className="font-bold">$ 60</tr>
                  </tr>
                </tbody>
              </table>
              <button
                onSubmit={() => handleSubmit(e)}
                className="py-4 px-8 rounded-[28px] bg-orange-400 hover:bg-orange-500 flex justify-center items-center text-white mt-10 w-full font-bold text-[20px]"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
