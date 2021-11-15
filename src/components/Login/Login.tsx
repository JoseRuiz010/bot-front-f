import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

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
    setisAuth(true);
  };
  return (
    <IonPage>
      <IonContent className="IonContent">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <IonHeader className="textTitle">Login </IonHeader>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="ContentFormLogin">
          <div className="img-Login">
            <img
              alt="img"
              className="img-loginc"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAIYiXQrd08RbDNiVrVDUDUatDREpKOyj14pjQ8g37DNFiZ1kLBnI5Mnw7O5SvyAAb-8&usqp=CAU"
            ></img>
          </div>

          <form>
            <div className="InputsLogin">
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
            </div>
            <div className="ButtonLogin">
              <IonButton
                className="buton"
                color="primary"
                onClick={(e) => onSubmit(e)}
              >
                Primary
              </IonButton>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};
