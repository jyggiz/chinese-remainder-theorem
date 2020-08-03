import * as React from "react";

interface HelloWorldProps {
  userName: string;
  lang: string;
}

const App = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);

export default App;