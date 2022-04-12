import React from "react";
import FormEdit from '../../components/form-edit';
import Layout from "../../components/layout";
import { options } from '../../assets/options';
import { useAppSelector } from '../../utils/hooks-redux';

function Edit() {
  const {profile} = useAppSelector(state => state.user);
  return (
    <Layout>
      <FormEdit options={options} data={profile}/>
    </Layout>
  );
}
export default React.memo(Edit);