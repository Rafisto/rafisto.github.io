import React from 'react'
import './css/IndexPage.css';
import {Link} from 'react-router-dom';

function IndexPage () {
  return (
      <div>
          <div className="innerdiv">
              <p style={{textAlign:'left'}}>Dzień dobry,</p>
              <p>Specjalnie dla tych, którzy wyrażą chęć czytania mojej twórczości,
              prezentuję stronę internetową, dzięki której w prosty sposób można
              przeglądać moje wiersze. Życzę miłego czytania!</p>
              <p style={{textAlign:'right',fontStyle:'italic'}}>Rafał Włodarczyk</p>
          </div>
          <div>
              <Link to="/list"><p className="listlink">Przejdź do listy wierszy</p></Link>
          </div>
      </div>
  );
}

export default IndexPage;