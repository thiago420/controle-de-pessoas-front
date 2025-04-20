import Input from '../../components/Input';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Container>
        <Input label="Usuário" placeholder="Digite seu nome de usuário" />
        <Input label="Senha" type="password" placeholder="Digite sua senha" />
        <Button text="Entrar" />
        <NavLink to="/forgot-password">Esqueci minha senha</NavLink>
        <NavLink to="/register">Não possui uma conta?</NavLink>
    </Container>
  )
}

export default Login;