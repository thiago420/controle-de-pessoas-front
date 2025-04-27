import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Header, HeaderTitle, HeaderActions, Button, Content,
  Filters, Table, TableHead, TableRow, TableCell, TableBody,
  TableButton, UserLabel
} from './styles'; // importa o style igual do alerta

type User = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  photo?: string;
};

const GerenciarUsuario = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    photo: '',
  });

  const handleSaveUser = () => {
    const { name, email, cpf, phone } = newUser;

    if (!name || !email || !cpf || !phone) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!email.includes('@')) {
      alert('Email inválido. Deve conter "@"');
      return;
    }

    if (!/^\d+$/.test(cpf)) {
      alert('CPF inválido. Apenas números são permitidos.');
      return;
    }

    if (!/^\d+$/.test(phone)) {
      alert('Telefone inválido. Apenas números são permitidos.');
      return;
    }

    if (editingUserId !== null) {
      const updatedUsers = users.map(user =>
        user.id === editingUserId ? { ...user, ...newUser } : user
      );
      setUsers(updatedUsers);
    } else {
      const id = users.length + 1;
      const updatedUsers = [...users, { id, ...newUser }];
      setUsers(updatedUsers);
    }

    setShowForm(false);
    setEditingUserId(null);
    setNewUser({ name: '', email: '', cpf: '', phone: '', photo: '' });
    setError(null);
  };

  const handleEditUser = (user: User) => {
    setNewUser({
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      phone: user.phone,
      photo: user.photo || '',
    });
    setEditingUserId(user.id);
    setShowForm(true);
    setError(null);
  };

  const handleDeleteUser = (id: number) => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingUserId(null);
    setNewUser({ name: '', email: '', cpf: '', phone: '', photo: '' });
    setError(null);
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Gerenciamento de Usuários</HeaderTitle>
        <HeaderActions>
          <Button onClick={() => navigate('/menu-administrador')}>← Voltar</Button>
          <UserLabel>Administrador</UserLabel>
        </HeaderActions>
      </Header>

      <Content>
        <Filters>
          <Button onClick={() => {
            setShowForm(true);
            setEditingUserId(null);
            setNewUser({ name: '', email: '', cpf: '', phone: '', photo: '' });
            setError(null);
          }}>
            Adicionar Usuário
          </Button>

          <input
            type="text"
            placeholder="Procurar por nome, email, CPF ou telefone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              marginLeft: '1rem',
              padding: '0.5rem',
              borderRadius: '20px',
              border: '1px solid #ccc'
            }}
          />
        </Filters>

        {showForm && (
          <div style={{ marginBottom: '1rem' }}>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <input
              placeholder="Nome"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <input
              placeholder="CPF"
              value={newUser.cpf}
              onChange={(e) => setNewUser({ ...newUser, cpf: e.target.value })}
            />
            <input
              placeholder="Telefone"
              value={newUser.phone}
              onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            />

            <div style={{ marginTop: '0.5rem' }}>
              <Button onClick={handleSaveUser}>
                {editingUserId !== null ? 'Atualizar' : 'Salvar'}
              </Button>
              <Button onClick={handleCancel} style={{ marginLeft: '0.5rem' }}>
                Cancelar
              </Button>
            </div>
          </div>
        )}

        <Table>
          <thead>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>NOME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>TELEFONE</TableHead>
              <TableHead>AÇÕES</TableHead>
            </TableRow>
          </thead>
          <TableBody>
            {users.filter(user =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.email.toLowerCase().includes(search.toLowerCase()) ||
              user.cpf.includes(search) ||
              user.phone.includes(search)
            ).length === 0 ? (
              <TableRow>
                <TableCell colSpan={6}>Nenhum usuário encontrado.</TableCell>
              </TableRow>
            ) : (
              users.filter(user =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()) ||
                user.cpf.includes(search) ||
                user.phone.includes(search)
              ).map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{String(user.id).padStart(2, '0')}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.cpf}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell style={{ display: 'flex', gap: '0.5rem' }}>
                    <TableButton onClick={() => handleEditUser(user)}>＋</TableButton>
                    <TableButton onClick={() => handleDeleteUser(user.id)}>⋯</TableButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Content>
    </Container>
  );
};

export default GerenciarUsuario;
