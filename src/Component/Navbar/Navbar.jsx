import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Home,
  School,
  BookOpen,
  Users,
} from "lucide-react";
import { logo, societylogo } from "../../assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const menuItems = [
    {
      name: "HOME",
      icon: <Home size={16} />,
      link: "/",
    },
    {
      name: "PRE-PRIMARY SECTION",
      icon: <School size={16} />,
      link: "/pre-primary",
      dropdown: [
        { name: "Curriculum", link: "/pre-primary/curriculum" },
        { name: "Activities", link: "/pre-primary/activities" },
        { name: "Facilities", link: "/pre-primary/facilities" },
        { name: "Admission", link: "/pre-primary/admission" },
      ],
    },
    {
      name: "PRIMARY SECTION",
      icon: <BookOpen size={16} />,
      link: "/primary",
      dropdown: [
        { name: "Academic Program", link: "/primary/academics" },
        { name: "Co-curricular", link: "/primary/co-curricular" },
        { name: "Sports", link: "/primary/sports" },
        { name: "Assessment", link: "/primary/assessment" },
      ],
    },
    {
      name: "SECONDARY SECTION",
      icon: <Users size={16} />,
      link: "/secondary",
      dropdown: [
        { name: "Curriculum", link: "/secondary/curriculum" },
        { name: "Career Guidance", link: "/secondary/career" },
        { name: "NDA Preparation", link: "/secondary/nda" },
        { name: "Results", link: "/secondary/results" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      link: "https://facebook.com/vppschoolemp",
      color: "text-white hover:text-blue-300",
    },
    {
      icon: <Twitter size={18} />,
      link: "https://twitter.com/vppschoolemp",
      color: "text-white hover:text-blue-200",
    },
    {
      icon: <Instagram size={18} />,
      link: "https://instagram.com/vppschoolemp",
      color: "text-white hover:text-pink-300",
    },
    {
      icon: <Youtube size={18} />,
      link: "https://youtube.com/vppschoolemp",
      color: "text-white hover:text-red-300",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleMainSite = () => {
    window.location.href = "https://vppschool.edu.in";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* ===== Top Header ===== */}
      <div className="bg-gradient-to-r from-orange-300 to-yellow-300 px-3 py-2">
        <div className="max-w-7xl mx-auto">
          {/* Mobile View */}
          <div className="md:hidden flex items-center justify-between gap-2">
            {/* Left Logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Left Logo" className="h-16 w-auto" />
            </div>

            {/* Center Text */}
            <div className="text-center flex-1 min-w-0 px-2">
              <h3 className="text-red-600 font-bold text-xs leading-tight">
                C.H.M.E. SOCIETY'S
              </h3>
              <h1 className="text-black font-extrabold text-xs leading-tight uppercase">
                Vidya Prabodhini Prashala
              </h1>
              <h1 className="text-black font-extrabold text-xs leading-tight uppercase">
                English Medium School
              </h1>
              <p className="text-[10px] font-semibold mt-0.5">
                (Pre-Primary to Standard 10th)
              </p>
              <p className="text-red-600 text-[10px] font-bold mt-0.5 leading-tight">
                Affiliated to Maharashtra Education Department
              </p>
            </div>

            {/* Right Logo */}
            <div className="flex-shrink-0">
              <img src={societylogo} alt="Right Logo" className="h-16 w-auto" />
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden w-full text-center mt-2">
            <button
              onClick={handleMainSite}
              className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold px-4 py-1.5 rounded w-full max-w-xs"
            >
              GO TO MAIN SITE
            </button>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-between gap-8">
            {/* Left Logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Left Logo" className="h-32 w-auto" />
            </div>

            {/* Center Text */}
            <div className="text-center flex-1">
              <h3 className="text-red-600 font-bold text-lg">
                C.H.M.E. SOCIETY'S
              </h3>
              <h1 className="text-black font-extrabold text-xl uppercase">
                Vidya Prabodhini Prashala English Medium School
              </h1>
              <p className="text-sm font-semibold">
                (Pre-Primary to Standard 10th)
              </p>
              <p className="text-red-600 text-sm font-bold">
                Affiliated to Maharashtra Education Department
              </p>
            </div>

            {/* Right Logo */}
            <div className="flex-shrink-0">
              <img src={societylogo} alt="Right Logo" className="h-32 w-auto" />
            </div>

            {/* Desktop Button */}
            <div>
              <button
                onClick={handleMainSite}
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-4 py-2 rounded"
              >
                GO TO MAIN SITE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Search Bar ===== */}
      {showSearch && (
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-7xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for announcements, events, or information..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                autoFocus
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery("");
                }}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===== Menu Bar ===== */}
      <nav className="bg-orange-600 relative" ref={dropdownRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <li key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex items-center gap-1 text-white font-semibold text-sm hover:text-black transition-colors py-1"
                      >
                        {item.icon}
                        <span className="ml-1">{item.name}</span>
                        <ChevronDown size={16} className="ml-1" />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg z-50 py-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.link}
                              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-sm font-medium">
                                {subItem.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="flex items-center gap-1 text-white font-semibold text-sm hover:text-black transition-colors py-1"
                    >
                      {item.icon}
                      <span className="ml-1">{item.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Search, Social Links and Menu Controls */}
            <div className="flex items-center gap-4 md:gap-6 ml-38">
              {/* Social Media Links - BOTH MOBILE & DESKTOP */}
              <div className="flex items-center gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} transition-colors`}
                    title="Follow us on social media"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Desktop Search Icon */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="hidden md:flex items-center text-white hover:text-black transition-colors"
                title="Search"
              >
                <Search size={18} />
              </button>

              {/* Mobile Search Icon */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="md:hidden text-white"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-orange-500 text-white px-4 py-3">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="mb-2">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex items-center justify-between w-full py-2 font-semibold text-sm"
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.link}
                            className="block py-1.5 text-sm opacity-90 hover:opacity-100"
                            onClick={() => setOpen(false)}
                          >
                            • {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="flex items-center gap-2 py-2 border-b border-orange-400 font-semibold text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                )}
              </div>
            ))}

            <button
              onClick={() => {
                handleMainSite();
                setOpen(false);
              }}
              className="w-full bg-white text-orange-600 py-2 rounded font-bold mt-4 text-sm"
            >
              GO TO MAIN SITE
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
