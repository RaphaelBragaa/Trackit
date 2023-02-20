import { useNavigate } from 'react-router-dom';

const SEC = 1000;
const MIN_5 = SEC * 60 * 5;

function RenderError() {
    const navigate = useNavigate();
    localStorage.clear("trackit");
    navigate('/')
}

export default function PrivatePage({children}) {

    const auth = JSON.parse(localStorage.getItem("trackit"));

    if (!auth) {
        return RenderError();
      }
      const now = +new Date();
      const timeLogged = auth.timestamp;
    
      if (now - timeLogged <= MIN_5) {
            return(
                <>
                {children}
                </>
            ) 
            } else {
                RenderError();
              }
}
