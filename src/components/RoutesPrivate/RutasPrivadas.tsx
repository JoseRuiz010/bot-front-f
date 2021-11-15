import { IonPage, IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router";
import { ChatScreen } from "../Chat/ChatScreen";
import { Home } from "../Home/Home";
import { DetalleNoticia } from "../Noticias/DetalleNoticia";
import { Noticias } from "../Noticias/Noticias";

export const RutasPrivadas: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={match.url} component={Home} />
        <Route path={`${match.url}/chats`} component={ChatScreen}></Route>
        <Route path={`${match.url}/noticias`} component={Noticias}></Route>
        <Route path={`${match.url}/noticia/:id`} component={DetalleNoticia} />
        <Route render={() => <Redirect to={match.url} />} />
      </IonRouterOutlet>
    </IonPage>
  );
};
