// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-schedule",
          title: "schedule",
          description: "TBA",
          section: "Navigation",
          handler: () => {
            window.location.href = "/schedule/";
          },
        },{id: "news-registration-is-now-open-participation-is-free-upon-filling-out-the-registration-form-please-note-that-due-to-the-venue-s-limited-capacity-spots-will-be-allocated-on-a-first-come-first-served-basis",
          title: 'Registration is now open! Participation is free upon filling out the registration form....',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
