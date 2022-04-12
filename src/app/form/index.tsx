import React from "react";
import Layout from "../../components/layout";
import FormSubmition from '../../components/form-submition';
import { options } from '../../assets/options';

function Form() {
    
  return (
    <Layout style={{backgroundColor: '#474747', paddingTop: 120}}>
      <FormSubmition
        options={options}
      />
    </Layout>
  )
}

export default React.memo(Form);