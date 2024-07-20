import React, { useState, useRef } from "react";
import useAlert from "../hooks/useAlert";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { FaGithub, FaBlog } from "react-icons/fa"; // Font Awesome 아이콘 사용
import profilePic from "../assets/images/profile.jpg"; // 프로필 사진 파일 경로

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "yellowsubmarine",
          from_email: form.email,
          to_email: "yellowsubmarine372@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);

        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative w-full h-screen bg-black">
      <div className="relative flex lg:flex-row flex-col max-container h-[100vh]">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 min-w-[50%] flex flex-col p-8">
          <span className="mb-10 text-4xl font-bold blue-gradient_text drop-shadow-sm">
            Contact
          </span>

          <form
            className="flex flex-col w-full gap-6"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-white">이름</label>
              <input
                type="text"
                name="name"
                className="px-4 py-2 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="박세은"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-white">메일</label>
              <input
                type="email"
                name="email"
                className="px-4 py-2 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="yellowsubmarine372@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-white">메세지</label>
              <textarea
                name="message"
                rows={4}
                className="px-4 py-2 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="인사 한번 해주세요!"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="p-3 text-white rounded-lg custom-gradient-button disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "전송 중..." : "전송하기"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] flex flex-col justify-center items-center p-8">
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 h-48 mb-10 rounded-full" // 프로필 사진 크기를 더 키움
          />
          <div className="flex flex-col items-center space-y-2">
            <a
              href="https://github.com/yellowsubmarine372"
              className="flex items-center text-base font-light text-white hover:text-slate-400" // 글씨 크기 조정
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" /> @yellowsubmarine372
            </a>
            <a
              href="https://velog.io/@yellow372/posts"
              className="flex items-center text-base font-light text-white hover:text-slate-400" // 글씨 크기 조정
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBlog className="mr-2" /> @yellow372
            </a>
          </div>
          <div className="mt-8 text-sm text-white">
            &copy; Park Sae eun 2024
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
