import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  add,
  chatbox,
  logOut,
  newspaper,
  personCircleOutline,
} from "ionicons/icons";
import { useContext } from "react";
import { RouteComponentProps } from "react-router";
import { DataContext } from "../../Context/dataContext";
import { Noticia } from "../Noticias/Noticia";
import "./styleHome.css";
export const Home: React.FC<RouteComponentProps> = (props) => {
  const { setisAuth } = useContext(DataContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Inicio</IonTitle>

          <IonIcon
            className="iconPerfil"
            slot="start"
            icon={personCircleOutline}
          ></IonIcon>
        </IonToolbar>
      </IonHeader>



      <IonContent>

          <Noticia></Noticia>
          <Noticia></Noticia>

      </IonContent>










      <IonFab vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonIcon icon={add} />
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
