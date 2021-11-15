import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
 
  IonIcon,
  IonInput,
  IonPage,
  IonThumbnail,
 
} from "@ionic/react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import { useFormHook } from "../../CustomHooks/useFormHook";

import "./StyleLogin.css";

export const Login = () => {
  const { setisAuth, Login } = useContext(DataContext);
  const { form, handleForm } = useFormHook({
    user: "",
    contraseña: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    Login(form);
    //console.log(form);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Inicio de sesion exitoso",
      showConfirmButton: false,
      timer: 2000,
    });
    /*Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Las credenciales ingresadas son incorrectas",
    });*/

    setisAuth(true);
  };
  return (
    <IonPage>
      <IonContent
        style={{
          backgroundImage: "https://wallpaperaccess.com/full/3162193.png",
        }}
        className="IonContent"
      >
        <div className="fondo"> </div>
        <IonThumbnail>
          <IonIcon></IonIcon>
        </IonThumbnail>

        <IonCard className="card-login">
          <IonCardTitle style={{ fontWeight: "bold", fontSize: "20px" }}>
            Login
          </IonCardTitle>
          <IonCardContent className="content-Input">
            <IonInput
              className="inp"
              name="user"
              placeholder="Usuario"
              onIonChange={(e) => handleForm(e)}
            ></IonInput>
            <IonInput
              className="inp"
              onIonChange={handleForm}
              name="contraseña"
              placeholder="Contraseña"
              type="password"
            ></IonInput>

            <IonButton
              className="buton"
              color="primary"
              onClick={(e) => onSubmit(e)}
            >
              Ingresar
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
