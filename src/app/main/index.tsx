import React from "react";
import Layout from "../../components/layout";
import Controls from '../../components/controls';
import Notification from '../../components/notification';
import Data from '../../components/data';

import { useAppSelector } from '../../utils/hooks-redux';
import { useNavigate } from 'react-router-dom';


function Main() {
  const {profile, formSubmitted} = useAppSelector(state => state.user);

  const navigate = useNavigate();

  const onRedirectPage = (path: string) => {
    return navigate(`${path}`, { replace: true })
  }

  const completeForm = (): void => {
    onRedirectPage('/form');
  }

  const editForm = (): void => {
    onRedirectPage('/edit');
  }
 
  return (
    <Layout head={<h1>Form data:</h1>}>
      {profile.name ? <Data data={profile}/> : <Notification text={'Форма пока не заполнена.'}/>}
      {formSubmitted ? <Controls onClick={editForm} text={'Изменить'} style={{ marginTop: "37px", marginLeft: "72px" }} /> : <Controls onClick={completeForm} text={'Заполнить форму'} style={{ marginTop: "37px", marginLeft: "72px" }} />}
    </Layout>
  );
}

export default React.memo(Main);
