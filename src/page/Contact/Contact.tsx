import React from "react";
import Pageheader from "../../components/utilitis/Pageheader";
import { FaLocationArrow } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Pageheader />
      <div className="mt-32 mb-32 flex justify-between max-w-[800px] mx-auto items-center gap-10">
        <div className="flex justify-center items-center gap-5 flex-col ">
          <div className="bg-blue-600 rounded-full w-12 h-12 p-2 flex justify-center items-center ">
            <FaLocationArrow className="text-white text-3xl -rotate-45" />
          </div>
          <div className="flex justify-center items-center gap-5 flex-col">
            <h1 className="text-black text-[18px] font-[700]">Our Location </h1>
            <p className="text-[14px] text-slate-500">
              House #5 , Street Number #98 <br /> , brasilia-700,Brazil
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 flex-col ">
          <div className="bg-blue-600 rounded-full w-12 h-12 p-2 flex justify-center items-center ">
            <IoMail className="text-white text-3xl " />
          </div>
          <div className="flex justify-center items-center gap-5 flex-col">
            <h1 className="text-black text-[18px] font-[700] text-center">
              Our Email Address{" "}
            </h1>
            <p className="text-[14px] text-slate-500">
              contact@dogri.com <br />
              support@dogri.com
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 flex-col ">
          <div className="bg-blue-600 rounded-full w-12 h-12 p-2 flex justify-center items-center ">
            <FaPhone className="text-white text-3xl " />
          </div>
          <div className="flex justify-center items-center  flex-col">
            <h1 className="text-black text-[18px] font-[700]">
              Contact Phone Number{" "}
            </h1>
            <p className="text-[14px] text-slate-500 mt-5">+6546546543544</p>
            <p className="text-[14px] text-slate-500">+6546546543745</p>
          </div>
        </div>
      </div>
      <div className="mt-32 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d29216.515059408644!2d90.35680596140489!3d23.745083421976947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!3m2!1d23.746149499999998!2d90.3742307!5e0!3m2!1sen!2sbd!4v1710720587712!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            // allowFullScreen=" "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <div className="contact-from bg-blue-300 p-5 py-12">
            <form action="#">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <div className="contact__from-input">
                    <input
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                      type="text"
                      placeholder="Full Name*"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="contact__from-input">
                    <input
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                      type="text"
                      placeholder="Email Address*"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="contact__from-input">
                    <input
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                      type="tel"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="contact__from-input">
                    <input
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                      type="date"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="contact__select mb-4">
                    <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400">
                      <option value="0">Pediatric Clinic</option>
                      <option value="2">DOGRIsis Clinic</option>
                      <option value="3">Cardiac Clinic</option>
                      <option value="1">Medical Pharmacy</option>
                      <option value="1">Rehabilitation Therapy</option>
                      <option value="1">Laryngological Clinic</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="contact__select mb-4">
                    <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400">
                      <option value="0">Choose Doctor</option>
                      <option value="2">Dr. Jalen Kothenbeutel</option>
                      <option value="3">Dr. Jade Dayal</option>
                      <option value="1">Dr. Zander Nishida</option>
                      <option value="1">Dr. Mattie Tellers</option>
                      <option value="1">Dr. Jade Dayal</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="contact__from-input">
                    <textarea
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                      name="Message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-span-2 ">
                  <div className="appointment__btn">
                    <button className="fill-btn" type="submit">
                      <span className="fill-btn-inner flex flex-col">
                        <span className="fill-btn-normal translate-y-3 rounded-lg text-white bg-blue-400 py-2 px-4 flex justify-center items-center ">
                          send now
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
