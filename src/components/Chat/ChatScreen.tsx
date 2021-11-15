import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { ContentChat } from "./ContentChat";
import { InputChat } from "./InputChat";

export const ChatScreen = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Chats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content-chats">
          <ContentChat></ContentChat>
        </div>
      </IonContent>

      <IonFooter>
        <InputChat></InputChat>
      </IonFooter>
    </IonPage>
  );
};
