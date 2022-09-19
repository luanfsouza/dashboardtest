/* eslint-disable jsx-a11y/img-redundant-alt */
import { FaTools } from 'react-icons/fa';
import { AiOutlineUser, AiFillCreditCard } from 'react-icons/ai';
import { Container } from './styles';

export function Main() {
  //diferença de dias
  // const hoje = new Date();
  // const tempo = new Date(2022, 8, 1, 18, 16);
  // const mile = Math.abs(hoje.getTime() - tempo.getTime());
  // console.log(Math.ceil(mile / (1000 * 60 * 60 * 24)));
  // console.log(hoje);
  // console.log(tempo);

  //somar dias a uma data
  // const data = new Date()
  // const quantidadeDeDias = 2
  // const fakeData =
  //   'Tue Oct 18 2022 17:45:51 GMT-0300 (Horário Padrão de Brasília)';
  // data.setDate(data.getDate()+quantidadeDeDias)
  // console.log(data)
  // console.log(Date.parse(fakeData));
  // console.log(new Date(fakeData));
  return (
    <Container>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li className="userProfile">
            <img src="img1.webp" alt="perfil-image" />
            <p>Jessica Jones</p>
          </li>
        </ul>
      </nav>
      <div className="containerFluid">
        <div className="bodyCard">
          <h4>prestação de serviço</h4>
          <div className="howMuch">
            <span>50</span>
            <div className="bodyCardIcon">
              <FaTools />
            </div>
          </div>
          <div className="cardInfo">
            <span className="cardInfoStatus">1.00%</span>
            <span className="cardInfoTime">Nos últimos 30 dias</span>
          </div>
        </div>
        <div className="bodyCard">
          <h4>usúarios</h4>
          <div className="howMuch">
            <span>100</span>
            <div className="bodyCardIcon">
              <AiOutlineUser />
            </div>
          </div>
          <div className="cardInfo">
            <span className="cardInfoStatus">3.00%</span>
            <span className="cardInfoTime">Nos últimos 30 dias</span>
          </div>
        </div>
        <div className="bodyCard">
          <h4>faturamento mensal</h4>
          <div className="howMuch">
            <span>3500</span>
            <div className="bodyCardIcon">
              <AiFillCreditCard />
            </div>
          </div>
          <div className="cardInfo">
            <span className="cardInfoStatus">51.00%</span>
            <span className="cardInfoTime">Em relação ao mês anterior</span>
          </div>
        </div>
        <div className="bodyCard">
          <h4>faturamento hoje</h4>
          <div className="howMuch">
            <span>2500</span>
            <div className="bodyCardIcon">
              <AiFillCreditCard />
            </div>
          </div>
          <div className="cardInfo">
            <span className="cardInfoStatus">51.00%</span>
            <span className="cardInfoTime">Em relação ao dia anterior</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
