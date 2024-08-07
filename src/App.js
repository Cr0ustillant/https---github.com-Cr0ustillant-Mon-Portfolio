import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';
import MailBox from './pages/MailBox';
import Error from './pages/Error';
import { FormDataProvider } from './context/FormDataContext';

function App() {
  return (
    <FormDataProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mailbox-data" element={<MailBox />} />
          <Route path="*" element={<Error />} />       
        </Routes>
        <Footer />
      </div>
    </FormDataProvider>
  );
}

export default App;