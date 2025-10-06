import { Settings, LifeBuoy, FileText, Globe, Sun, Moon } from "lucide-react";

export default function NavbarDropdown({
  dropdownOpen,
  setDropdownOpen,
  dropdownRef,
  handleSupport,
  handleLicense,
  toggleLanguage,
  handleThemeToggle,
  theme,
  i18n,
}) {
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="p-3 bg-transparent rounded-full transition-all duration-300 focus:outline-none"
      >
        <Settings className="w-6 h-6 text-primary dark:text-primary" />
      </button>

      {dropdownOpen && (
        <div className="overflow-hidden absolute right-0 mt-2 w-52 origin-top-right rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-200 ease-out animate-fadeIn">
          <div className="">
            {/* Support */}
            <button
              onClick={handleSupport}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
            >
              <LifeBuoy size={18} />
              <span>Support</span>
            </button>

            {/* License */}
            <button
              onClick={handleLicense}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
            >
              <FileText size={18} />
              <span>License</span>
            </button>

            {/* Language */}
            <button
              onClick={toggleLanguage}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
            >
              <Globe size={18} />
              <span>{i18n.language === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Theme */}
            <button
              onClick={handleThemeToggle}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
