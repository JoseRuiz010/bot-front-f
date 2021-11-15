import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { dataNoticias } from "../../data/dataNoticias";

export const DetalleNoticia = (props: any) => {
  console.log(props);
  const idNoticia = props.match.params.id;
  console.log(idNoticia);

  const noticia = dataNoticias.find((n) => {
    console.log(`${n.id} === ${idNoticia}`);
    console.log(`${n.id === idNoticia}`);
    return n.id === idNoticia;
  });
  console.log(noticia);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>
            <b>{noticia?.title}</b>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow>
          <IonCol size="8">
            <IonCard>
              <img alt="img" src={noticia?.imagen}></img>
            </IonCard>
          </IonCol>
          <IonCol size="12">
            <IonList>
              <IonItem>
                <IonLabel>
                  <b>Subtitle: </b> {noticia?.subtitle}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <b>Contenido: </b> {noticia?.content}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <b>Fecha: </b> {noticia?.fecha}
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};
