import Input from '../../components/Input';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';
import Button from '../../components/Button';

const Register = () => {
  return (
    <Container>
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Usuário" placeholder="Digite seu nome de usuário" />
      <Input label="Senha" type="password" placeholder="Digite sua senha" />
      <Input label="Repitir Senha" type="password" placeholder="Digite sua senha" />
      <Button text="Criar Conta" />
      <NavLink to="/login">Já possui uma conta?</NavLink>
    </Container>
  )
}

export default Register;