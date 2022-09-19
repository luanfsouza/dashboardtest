import { Container } from './styles';

export function Navbar() {
  return (
    <Container>
      <div className="navLogo">
        <img src="clickasa_logo-1.61f7e2de.png" alt="clickasa_logo" />
      </div>
      <ul>
        <li>Dashboard</li>
        <li>Solicitações</li>
        <li>Clientes</li>
        <li>Prestadores</li>
        <li>Categorias</li>
        <li>Serviçoes</li>
        <li>Logs</li>
      </ul>
      <div className="documentation">
        <h2>documentações</h2>
        <ul>
          <li>API Rest</li>
        </ul>
      </div>
    </Container>
  );
}
