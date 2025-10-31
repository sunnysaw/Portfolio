import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const NavIcon = ({ src, label, path }) => {
    const handleNavigate = () => {
      if (path.startsWith("http")) {
        window.open(path, "_blank");
      } else if (path.startsWith("tel")) {
        window.location.href = "tel:+918084401051";
      } else if (path.startsWith("mailto")) {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=sunnygupta.mern@gmail.com",
          "_blank"
        );
      } else if (path.endsWith(".pdf")) {
        const link = document.createElement("a");
        link.href = path;
        link.download = "SunnyGupta_Resume";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        navigate(path);
      }
    };
    return (
      <div className="relative group">
        <img
          src={src}
          alt={label}
          onClick={handleNavigate}
          className="w-8 hover:scale-110 transition-transform cursor-pointer hover:bg-blue-100 rounded"
        />

        <span
          className="
      absolute left-10 top-1/2 -translate-y-1/2
      opacity-0 group-hover:opacity-100
      bg-black text-white text-xs px-2 py-1 rounded-lg
      transition-all duration-200
      whitespace-nowrap
    "
        >
          {label}
        </span>
      </div>
    );
  };

  const icons = [
    { src: "/home.svg", label: "Home", path: "/" },
    { src: "/x.svg", label: "Twitter", path: "https://x.com/Sunny_Mern_AI" },
    {
      src: "/github.svg",
      label: "GitHub",
      path: "https://github.com/sunnysaw",
    },
    {
      src: "/insta.svg",
      label: "Instagram",
      path: "https://www.instagram.com/sunny_gupta78/",
    },
    {
      src: "/linkedin.svg",
      label: "LinkedIn",
      path: "https://www.linkedin.com/in/sunny-gupta-9850b8246/",
    },
    {
      src: "/mail.svg",
      label: "Gmail",
      path: "mailto:",
    },
    { src: "/call.svg", label: "Call", path: "tel:+918084401051" },
    { src: "/resume.svg", label: "Resume", path: "/margin.pdf" },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 h-1/2 flex items-center">
      <div className="flex flex-col gap-6 p-4 bg-white/10 backdrop-blur-md rounded-r-2xl shadow-2xl border-2 border-white/20 max-md:gap-4 max-md:p-2">
        {icons.map((icon, index) => (
          <NavIcon
            key={index}
            src={icon.src}
            label={icon.label}
            path={icon.path}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
