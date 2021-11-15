import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Noticia } from "./Noticia";
import { dataNoticias } from "../../data/dataNoticias";
export const Noticias = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Noticias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {dataNoticias.map((n) => (
            <Noticia noticia={n}></Noticia>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
