import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import axios from 'axios'
import './Tab1.css';

const Tab1: React.FC = () => {

  let locale = 'es-ES'

  var data = JSON.stringify({
    "identifier": "test@test.com",
    "password": "Qwer1234"
  });
  
  var config = {
    method: 'post',
    url: 'http://localhost:1337/api/auth/local',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(async (response:any)=>{
    console.log(JSON.stringify(response.data));

    
    await axios.get('http://localhost:1337/api/celebrations', {
      /*headers: {
        Authorization:
          'Bearer '+response.data.jwt,
      },*/
    })
    .then(async (response:any)=>{
      console.log(JSON.stringify(response.data));
    })

    await axios.get('http://localhost:1337/api/motivations?locale='+locale, {
      /*headers: {
        Authorization:
          'Bearer '+response.data.jwt,
      },*/
    })
    .then(async (response:any)=>{
      console.log(JSON.stringify(response.data));
    })

    await axios.get('http://localhost:1337/api/users', {
      /*headers: {
        Authorization:
          'Bearer '+response.data.jwt,
      },*/
    })
    .then(async (response:any)=>{
      console.log(JSON.stringify(response.data));
    })

  })
  .catch(function (error:Error) {
    console.log(error);
  })
  
  return (<>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">This is the menu content.</IonContent>
    </IonMenu>
      <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 1</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Tab 1 page" />
        </IonContent>
      </IonPage>
    </>
  )

}

export default Tab1;
