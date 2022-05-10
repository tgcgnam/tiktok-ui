import Upload from '~/pages/Upload';
import Header from '../components/Header';

function HeaderOnly() {
   return (
      <div>
         <Header />
         <div className="container">
            <div className="content">
               <Upload />
            </div>
         </div>
      </div>
   );
}

export default HeaderOnly;
