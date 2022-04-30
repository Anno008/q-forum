import NavigationLocators from "./navigation/NavigationLocators";
import ThemeSwitchLocators from "./components/ThemeSwitchLocators";
import UserFilterLocators from "./components/UserFilterLocators";
import PostPageLocators from "./pages/PostPageLocators";
import PostDetailsPageLocators from "./pages/PostDetailsPageLocators";

export default {
  // common
  mainLayout: "mainLayout",
  ...NavigationLocators,

  // components
  ...ThemeSwitchLocators,
  ...UserFilterLocators,

  // pages
  ...PostPageLocators,
  ...PostDetailsPageLocators
};
