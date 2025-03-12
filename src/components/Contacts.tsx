import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  bg-gray-300 p-12 text-center  shadow-xl shadow-cyan-50/40 w-100 h-150 opacity-70"
      style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
    >
      <h1 className="text-md font-bold mb-6">Reach With Us</h1>
      <p className="text-sm text-gray-700">
        We are always excited to connect with individuals, businesses, and
        organizations that share our vision for sustainable and innovative urban
        development. Whether you have a project idea, a collaboration proposal,
        or simply want to learn more about our work, we’d love to hear from you!
        <br />
        <br />
        Reach out to us via email at <strong>
          contact@urbanvisionary.com
        </strong>{" "}
        or call us at
        <strong> +355 123 456 789</strong>. You can also follow us on our social
        media channels to stay updated on our latest projects, news, and
        insights.
        <br />
        <br />
        Let's build the future together—one city at a time.
      </p>
      <Link
        to="/"
        className="mt-6 text-blue-600 font-semibold hover:opacity-[.67] z-20"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Contacts;
