import icon from '../../assets/img/notification-icon.svg' /* dois pontos significa voltar uma pasta*/
import './styles.css' /* um ponto significa mesma pasta */

function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Notificar" /> 
    </div>
  );
}

export default NotificationButton;
