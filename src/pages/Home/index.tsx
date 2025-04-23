import React from 'react';
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdOutlineLock } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";
import { Grid1, Grid2, Grid3, Header, Main } from './styles';

const Home = () => {
	return (
		<>
			<Header>
				<div>
					<img src="/logo.png" alt="Logo" height={50} />
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: '15px'
					}}
				>
					<span>Utilize FacePass</span>
					<span>Desenvolvedores</span>
					<span>Junte-se a nós</span>
					<button className="login">Login</button>
					<button className="register">Cadastro</button>
				</div>
			</Header>
			<Main>
				<Grid1>
					<div className="div1">
						<h1 style={{ fontSize: '3.5rem' }}>Gestão de Pessoas</h1>
						<span style={{ fontSize: '1.2rem' }}>Este sistema utiliza tecnologia de reconhecimento facial para controlar o acesso a ambientes. Ele identifica automaticamente as pessoas, registrando seus acessos de forma rápida e segura, sem necessidade de senhas ou cartões.</span>
					</div>
					<div className="div2" style={{ height: '250px' }}>
						<img src="/seila.png" width={350} style={{ position: 'absolute', right: '0' }} />
					</div>
				</Grid1>
				<Grid2>
					<div className="div1">
						<h1>Utilize FacePass</h1>
					</div>
					<div className="div2">
						<TbWorld size={25} style={{ color: '#68C5FF' }} />
						<h4>Mais Segurança no Controle de Acesso</h4>
						<span>Elimine o uso de crachás, senhas ou cartões que podem ser compartilhados ou perdidos. Com reconhecimento facial, apenas pessoas autorizadas acessam os ambientes corretos.</span>
					</div>
					<div className="div3">
						<BsPersonCircle size={25} style={{ color: '#68C5FF' }} />
						<h4>Agilidade e Eficiência nas Entradas e Saídas</h4>
						<span>Identificação instantânea reduz filas, melhora o fluxo de pessoas e aumenta a produtividade da equipe desde o primeiro minuto do dia.</span>
					</div>
					<div className="div4">
						<MdOutlineLock size={25} style={{ color: '#68C5FF' }} />
						<h4>Segurança Avançada e Proteção de Dados</h4>
						<span>Acesso restrito e criptografia avançada garantem a segurança de pessoas e informações, sem margem para erros.</span>
					</div>
					<div className="div5">
						<RxCalendar size={25} style={{ color: '#68C5FF' }} />
						<h4>Imagem Corporativa Moderna</h4>
						<span>Usar reconhecimento facial transmite uma imagem de inovação, tecnologia e cuidado com segurança — valores que impactam positivamente colaboradores e visitantes.</span>
					</div>
				</Grid2>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<h1>Desenvolvedores</h1>
					<Grid3>
						<div className='card'>
							<div className='links'>
								<FaLinkedin size={35} />
								<FaInstagramSquare size={35} />
							</div>
							<div className='pessoa'>
								<img src="/devs/thiago.jpg" />
								<div className='nome'>
									<h3>Thiago E. Antunes</h3>
									<h4>P.O</h4>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='links'>
								<FaLinkedin size={35} />
								<FaInstagramSquare size={35} />
							</div>
							<div className='pessoa'>
								<img src="/devs/tessari.jpg" />
								<div className='nome'>
									<h3>Gabirel S. Tessari</h3>
									<h4>Arquiteto</h4>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='links'>
								<FaLinkedin size={35} />
								<FaInstagramSquare size={35} />
							</div>
							<div className='pessoa'>
								<img src="/devs/adrian.jpg" />
								<div className='nome'>
									<h3>Adrian B. V. de Oliveira</h3>
									<h4>Desenvolvedor Front-End</h4>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='links'>
								<FaLinkedin size={35} />
								<FaInstagramSquare size={35} />
							</div>
							<div className='pessoa'>
								<img src="/devs/jose.jpg" />
								<div className='nome'>
									<h3>José Vitor Masieiro</h3>
									<h4>Desenvolvedor Back-End</h4>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='links'>
								<FaLinkedin size={35} />
								<FaInstagramSquare size={35} />
							</div>
							<div className='pessoa'>
								<img src="/devs/pedro.jpg" />
								<div className='nome'>
									<h3>Pedro H. C. Santana</h3>
									<h4>Desenvolvedor Back-End</h4>
								</div>
							</div>
						</div>
					</Grid3>
				</div>
			</Main>
		</>
	)
}

export default Home;