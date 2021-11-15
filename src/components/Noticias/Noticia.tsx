import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRouterLink,
} from "@ionic/react";
import { Link } from "react-router-dom";

import "./styleNoticia.css";
export const Noticia = ({ noticia }: { noticia: any }) => {
  return (
    <IonCard className="card">
      <div className="content-img">
        <img className="card-img" src={noticia.imagen} alt="img" />
      </div>
      <IonCardHeader className="card-header">
        <IonCardSubtitle>{noticia.subtitle}</IonCardSubtitle>
        <IonCardTitle>{noticia.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="card-content">
        {noticia.content}
        <Link to={`/home/noticia/${noticia.id}`}>Ver mas...</Link>
      </IonCardContent>
    </IonCard>
  );
};
