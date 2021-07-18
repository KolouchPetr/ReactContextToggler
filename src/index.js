import React from "react";
import ReactDOM from "react-dom";
import { ThemeContext, themes } from "./theme-context";
import ThemeTogglerButton from "./theme-toggler-button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content></Content>
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton></ThemeTogglerButton>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
