import { useRef, useState, lazy, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { email, firstName } from '../constants/index.js';
import useAlert from '../hooks/useAlert.js';
import { ArrowRight, Loader, MessageCircle, Plus } from 'lucide-react';
import { Input } from '../components/GlowyInput.jsx';
import Draggable from 'react-draggable';

const Alert = lazy(() => import('../components/Alert.jsx'));

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
          to_name: firstName,
          from_email: form.email,
          to_email: email,
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
          }, 3000);
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
    <Draggable>
      <section className="c-space my-20 w-fit" id="contact">
        <Suspense fallback={<div>Loading...</div>}>{alert.show && <Alert {...alert} />}</Suspense>

        <div className="relative bg-card flex items-center  flex-col border rounded-xl p-4">
          <div className="w-full cursor-grab active:cursor-grabbing absolute top-0 h-14 items-center flex bg-gradient-to-r from-black-500 via-gray-400 to-black-500 rounded-t-xl">
            <div className="flex gap-3 mr-auto ml-7 ">
              <div className="shadow-lg shadow-red-500 rounded-full w-4 h-4 bg-red-500 "></div>
              <div className="shadow-lg shadow-yellow-500 rounded-full w-4 h-4 bg-yellow-500"></div>
              <div className="shadow-lg shadow-green-500 rounded-full w-4 h-4 bg-green-500"></div>
            </div>
            <Plus className="ml-auto mr-7" color="white" />
          </div>

          <div className="contact-container">
            <h3 className="flex gap-4 items-center text-foreground head-text md:mt-5 text-xl md:text-2xl">
              <MessageCircle color="white" size={25} /> Let&apos;s talk
            </h3>
            <p className="text-sm md:text-md text-white-600 mt-3 text-balance">
              Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique
              project to life, I&apos;m here to help.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="my-12 flex flex-col space-y-4">
              <label className="space-y-1">
                <span className="field-label text-xs md:text-sm">Full Name</span>
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="field-input text-xs md:text-sm"
                  placeholder="John Doe"
                />
              </label>

              <label className="space-y-1">
                <span className="field-label text-xs md:text-sm">Email address</span>

                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="field-input text-xs md:text-sm"
                  placeholder="johndoe@gmail.com"
                />
              </label>

              <label className="space-y-1">
                <span className="field-label text-xs md:text-sm">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  autoComplete="off"
                  className="field-input text-xs md:text-sm"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="tracking-wide field-btn text-xs md:text-sm cursor-pointer inline-flex h-10 animate-shimmer gap-2 items-center justify-center rounded-full border border-border bg-[linear-gradient(110deg,hsl(var(--background)),47%,hsl(var(--accent)),55%,hsl(var(--background)))] bg-[length:200%_100%] px-6 font-base text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-1 focus:ring-offset-border">
                {loading ? (
                  <span className="flex items-center gap-4">
                    {' '}
                    Sending...
                    <Loader className="h-4 animate-spin" />{' '}
                  </span>
                ) : (
                  <span className="flex items-center gap-4">
                    {' '}
                    Send message
                    <ArrowRight className="h-4" />{' '}
                  </span>
                )}
              </button>
              {/* <button className="" >
                <ArrowUpRight />
              </button> */}
            </form>
          </div>
        </div>
      </section>
    </Draggable>
  );
};

export default Contact;
