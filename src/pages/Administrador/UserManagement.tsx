import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  photo?: string;
};

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); // Hook para navegação

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
    <div style={{ padding: '1rem' }}>
      <header style={{ background: '#0b0e1b', color: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Gerenciamento de Usuários</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/menu-administrador')}>← Voltar para Menu Administrador</button>
          <span>Administrador</span>
        </div>
      </header>

      <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
        <button onClick={() => {
          setShowForm(true);
          setEditingUserId(null);
          setNewUser({ name: '', email: '', cpf: '', phone: '', photo: '' });
          setError(null);
        }}>
          Adicionar Usuário
        </button>

        <input
          type="text"
          placeholder="Procurar por nome, email, CPF ou telefone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginLeft: '1rem', padding: '0.5rem', flex: 1 }}
        />
      </div>

      {showForm && (
        <div style={{ marginBottom: '1rem' }}>
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <input placeholder="Nome" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
          <input placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
          <input placeholder="CPF" value={newUser.cpf} onChange={(e) => setNewUser({ ...newUser, cpf: e.target.value })} />
          <input placeholder="Telefone" value={newUser.phone} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />

          <div style={{ marginTop: '0.5rem' }}>
            <button onClick={handleSaveUser}>
              {editingUserId !== null ? 'Atualizar' : 'Salvar'}
            </button>
            <button onClick={handleCancel} style={{ marginLeft: '0.5rem' }}>Cancelar</button>
          </div>
        </div>
      )}

      <table border={1} cellPadding={10} style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>CPF</th>
            <th>TELEFONE</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.cpf.includes(search) ||
            user.phone.includes(search)
          ).length === 0 ? (
            <tr>
              <td colSpan={6}>Nenhum usuário encontrado.</td>
            </tr>
          ) : (
            users.filter(user =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.email.toLowerCase().includes(search.toLowerCase()) ||
              user.cpf.includes(search) ||
              user.phone.includes(search)
            ).map((user) => (
              <tr key={user.id}>
                <td>{String(user.id).padStart(2, '0')}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.cpf}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Editar</button>
                  <button onClick={() => handleDeleteUser(user.id)} style={{ marginLeft: '0.5rem' }}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
