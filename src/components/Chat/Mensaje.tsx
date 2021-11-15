import { IonCard, IonCol } from "@ionic/react";

export const Mensaje = ({
  size,
  offset,
  color,
  m,
}: {
  size: any;
  offset: any;
  color: any;
  m: any;
}) => {
  return (
    <IonCol className={`msj `} size={size} offset={offset}>
      <IonCard className={`msjCard ${color}`}>
        <b>{m.creador}</b>
        <br />
        <span className="text-mensaje">{m.mensaje}</span>
        <div className="fecha">{m.fecha}</div>
      </IonCard>
    </IonCol>
  );
};
