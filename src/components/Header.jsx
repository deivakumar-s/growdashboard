import { useState } from "react";
import {
  Menu,
  X,
  CircleArrowDown,
  Bell,
  Download,
  User,
  ChevronDown,
} from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    {
      title: "Trade",
      submenu: ["Crypto", "Stocks", "Options"],
    },
    {
      title: "Markets",
    },
    {
      title: "Earn",
      submenu: ["Staking", "Savings", "Vault"],
    },
    {
      title: "Blog",
      submenu: ["Tips", "News", "Community"],
    },
    {
      title: "Invite & Earn",
    },
    {
      title: "Reward Hub",
    },
    {
      title: "List your crypto",
    },
  ];

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <header className="bg-[#161616] text-white px-4 py-2 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="relative font-bold text-lg leading-none">
  <div className="flex items-center gap-1">
    <span className="text-green-500">G</span>
    <span className="text-white">roww</span>
  </div>
  <span className="absolute right-0 text-[10px] text-gray-300">PARK</span>
</div>

          <div className="hidden lg:block w-px h-6 bg-gray-600"></div>
          <nav className="hidden lg:flex gap-4 text-sm">
  {navItems.map((item) => (
    <div key={item.title} className="relative">
      <button
        onClick={() => toggleDropdown(item.title)}
        className="flex items-center gap-1 hover:text-green-400"
      >
        {item.title}
        {item.submenu && <ChevronDown size={16} />}
      </button>

      {item.submenu && openDropdown === item.title && (
        <div className="absolute top-6 left-0 w-40 bg-[#1a1b1f] text-sm rounded  py-2">
          {item.submenu.map((sub, idx) => (
            <a
              key={idx}
              href="#"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              {sub}
            </a>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-[#0de292] text-black px-4 py-1 rounded-md text-sm font-medium flex items-center gap-1">
            <CircleArrowDown size={16} /> Deposit
          </button>
          <span className="text-sm cursor-pointer">Assets</span>
          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-6 bg-gray-600" />
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-[#0de292]">
            <User size={16} />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <Bell size={16} />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <Download size={16} />
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 px-2 py-2 bg-[#161616] rounded-md shadow-md">
          {navItems.map((item) => (
            <div key={item.title} className="mb-2">
              <div
                onClick={() => toggleDropdown(item.title)}
                className="flex justify-between items-center cursor-pointer text-sm text-white"
              >
                <span>{item.title}</span>
                {item.submenu && <ChevronDown size={16} />}
              </div>
              {item.submenu && openDropdown === item.title && (
                <div className="pl-4 mt-1 text-sm text-gray-300 flex flex-col gap-1">
                  {item.submenu.map((sub, idx) => (
                    <a key={idx} href="#" className="hover:text-green-400">
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile buttons */}
          <div className="mt-4 flex flex-col gap-3">
            <button className="bg-[#0de292] text-black px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 justify-center">
              <CircleArrowDown size={16} /> Deposit
            </button>
            <span className="text-sm text-white">Assets</span>
            <div className="flex gap-3 mt-2">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <User size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <Bell size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <Download size={16} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
