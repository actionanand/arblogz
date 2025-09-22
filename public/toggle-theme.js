const primaryColorScheme = ""; // "light" | "dark"

function getPreferTheme() {
  // Get theme data from local storage
  const currentTheme = localStorage.getItem("theme");
  
  // return theme value in local storage if it is set
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();
console.log('Initial theme value:', themeValue);
console.log('Initial localStorage theme:', localStorage.getItem("theme"));

function setPreference() {
  localStorage.setItem("theme", themeValue);
  console.log('Theme saved to localStorage:', themeValue);
  console.log('Current localStorage theme:', localStorage.getItem("theme"));
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);
  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);
}

// set early so no page flashes / CSS is made aware
reflectPreference();

function init() {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  const themeBtn = document.querySelector("#theme-btn");
  console.log('Theme button found:', !!themeBtn);
  
  themeBtn?.addEventListener("click", () => {
    console.log('Theme button clicked! Current theme:', themeValue);
    themeValue = themeValue === "light" ? "dark" : "light";
    console.log('New theme value:', themeValue);
    setPreference();
  });
  
  document.querySelector("#theme-btn-mobile")?.addEventListener("click", () => {
    console.log('Mobile theme button clicked! Current theme:', themeValue);
    themeValue = themeValue === "light" ? "dark" : "light";
    console.log('New theme value:', themeValue);
    setPreference();
  });
}

// Use DOMContentLoaded instead of load for faster initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOM is already loaded
  init();
}

// sync with system changes
window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({matches: isDark}) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
