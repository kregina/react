import { Suspense } from 'react';
import Footer from './Footer';
import Header from './Header';
import Loading from '../components/Loading';
import Home from '../Home';
import { Container } from './styles';

const App = () => (
  <Container>
    <Header />
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
    <Footer />
  </Container>
)

export default App;
