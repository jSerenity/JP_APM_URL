import React, { Component }  from 'react';
import { withAuth } from '../Msal/MsalAuthProvider';
import APM_Version from '../components/Views/APM_Versions'



class OAuthInit extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(<div className="app-routes"> 
                    <APM_Version/>
              </div>
       );
    }
}
 const Init = withAuth(OAuthInit);
export default Init;