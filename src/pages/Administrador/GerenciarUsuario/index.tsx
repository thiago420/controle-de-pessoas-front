import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderTitle,
  HeaderActions,
  Content,
  Filters,
  SearchInput,
  ActionButton,
  UserLabel,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableButton,
  FormContainer,
  Input,
  FormButtons
} from './styles'; // Importa do styles.ts

type User = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  photo?: string;
};

const GerenciarUsuario = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState<string | null>(null);

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
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!email.includes('@')) {
      alert('Email inválido.');
      return;
    }

    if (!/^\d+$/.test(cpf) || !/^\d+$/.test(phone)) {
      alert('CPF e Telefone devem conter apenas números.');
      return;
    }

    if (editingUserId !== null) {
      setUsers(users.map(user => user.id === editingUserId ? { ...user, ...newUser } : user));
    } else {
      const id = users.length + 1;
      setUsers([...users, { id, ...newUser }]);
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
    setUsers(users.filter(user => user.id !== id));
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingUserId(null);
    setNewUser({ name: '', email: '', cpf: '', phone: '', photo: '' });
    setError(null);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.cpf.includes(search) ||
    user.phone.includes(search)
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>Gerenciamento de Usuários</HeaderTitle>
        <HeaderActions>
          <ActionButton onClick={() => navigate('/menu-administrador')}>
            ← Voltar
          </ActionButton>
          <UserLabel>Administrador</UserLabel>
        </HeaderActions>
      </Header>

      <Content>
        <Filters>
          <ActionButton onClick={() => {
            setShowForm(true);
            setEditingUserId(null);
            setNewUser({ name: '', email: '', cpf: '', phone: '', photo: '' });
          }}>
            Adicionar Usuário
          </ActionButton>
          <SearchInput
            type="text"
            placeholder="Procurar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Filters>

        {showForm && (
          <FormContainer>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Input
              placeholder="Nome"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <Input
              placeholder="CPF"
              value={newUser.cpf}
              onChange={(e) => setNewUser({ ...newUser, cpf: e.target.value })}
            />
            <Input
              placeholder="Telefone"
              value={newUser.phone}
              onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            />
            <FormButtons>
              <ActionButton onClick={handleSaveUser}>
                {editingUserId !== null ? 'Atualizar' : 'Salvar'}
              </ActionButton>
              <ActionButton onClick={handleCancel}>
                Cancelar
              </ActionButton>
            </FormButtons>
          </FormContainer>
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
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{String(user.id).padStart(2, '0')}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.cpf}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell style={{ display: 'flex', gap: '0.5rem' }}>
                    <TableButton onClick={() => handleEditUser(user)}>✏️</TableButton>
                    <TableButton onClick={() => handleDeleteUser(user.id)}>🗑️</TableButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>Nenhum usuário encontrado.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Content>
    </Container>
  );
};

export default GerenciarUsuario;
