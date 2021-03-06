import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Login } from "./components/Login/Login";

import { RutasPrivadas } from "./components/RoutesPrivate/RutasPrivadas";

import { DataContext } from "./Context/dataContext";
import { useContext } from "react";

const App: React.FC = () => {
  const { isAuth } = useContext(DataContext);
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            path="/home"
            render={(props) => {
              return isAuth ? <RutasPrivadas {...props} /> : <Login></Login>;
            }}
            /*component={RutasPrivadas}*/
          ></Route>
          <Route path="/login" component={Login}></Route>
          <Route render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
