import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import { ArrowUpRight, MessageCircle, Plus } from 'lucide-react';
import { Input } from '../components/GlowyInput.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col border rounded-xl">
        {/* <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" /> */}
        <div className="w-full h-14 items-center flex bg-gradient-to-r from-black-500 via-gray-400 to-black-500 rounded-t-xl">
          <div className="flex gap-3 mr-auto ml-7 ">
            <div className="shadow-lg shadow-red-500 rounded-full w-4 h-4 bg-red-500 "></div>
            <div className="shadow-lg shadow-yellow-500 rounded-full w-4 h-4 bg-yellow-500"></div>
            <div className="shadow-lg shadow-green-500 rounded-full w-4 h-4 bg-green-500"></div>
          </div>
          <Plus className="ml-auto mr-7" color="white" />
        </div>

        <div className="contact-container my-10">
          <h3 className=" flex gap-4 items-center head-text md:mt-5">
            <MessageCircle color="white" size={35} /> Let&apos;s talk
          </h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique
            project to life, I&apos;m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="my-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <Input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <ArrowUpRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
