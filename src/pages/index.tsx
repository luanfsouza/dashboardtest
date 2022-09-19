import { Main } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Main />
    </Container>
  );
}
