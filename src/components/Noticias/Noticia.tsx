import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

import "./styleNoticia.css";
export const Noticia = () => {
  return (
    <IonCard className="card">
      <img
        className="card-img"
        src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg"
        alt="img"
      />
      <IonCardHeader className="card-header">
        <IonCardSubtitle>Destination</IonCardSubtitle>
        <IonCardTitle>Madison, WI</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="card-content">
        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
        Madison was named the capital of the Wisconsin Territory in 1836.
      </IonCardContent>
    </IonCard>
  );
};
