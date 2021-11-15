import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  add,
  chatbox,
  gridOutline,
  logOut,
  newspaper,
  personCircleOutline,
} from "ionicons/icons";
import { useContext } from "react";
import { RouteComponentProps } from "react-router";
import { DataContext } from "../../Context/dataContext";
import { Noticia } from "../Noticias/Noticia";
import { Slide } from "./Slide";
import "./styleHome.css";
export const Home: React.FC<RouteComponentProps> = (props) => {
  const { setisAuth } = useContext(DataContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="content">
        <IonItemDivider color="primary">
          <IonLabel>Ultimas Noticias</IonLabel>
        </IonItemDivider>
        <Slide></Slide>
      </IonContent>

      <IonFab vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonIcon icon={gridOutline} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton onClick={() => setisAuth(false)}>
            <IonIcon icon={logOut} />
          </IonFabButton>
          <IonFabButton onClick={() => props.history.push("/home/noticias")}>
            <IonIcon icon={newspaper} />
          </IonFabButton>
          <IonFabButton onClick={() => props.history.push("/home/chats")}>
            <IonIcon icon={chatbox} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonPage>
  );
};
