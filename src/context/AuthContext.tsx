/* eslint-disable eqeqeq */
import React, { createContext, useCallback } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { login } from '../services/auth';

interface SignInCredentials {
  email: string;
  senha: string;
}
interface GeneratePasswordProps {
  email: string;
}
interface ValidateCodeProps {
  email: string;
  senha: string;
  codigo: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<boolean>;
  generatePasswordRecoverCode(
    credentials: GeneratePasswordProps,
  ): Promise<boolean>;
  validateCodeAndUpdate(credentials: ValidateCodeProps): Promise<boolean>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, senha }) => {
    try {
      const response = await api.post('access/auth', {
        email,
        senha,
      });
      if (response.data?.user?.acesso == 1) {
        login(response.data?.access?.token);
        localStorage.setItem(
          '@codeApi:user',
          JSON.stringify(response.data?.user),
        );
        toast.success('Bem Vindo!');
        return true;
      } else {
        toast.error('Usuário não autorizado');
        return false;
      }
    } catch (err) {
      toast.error('Credenciais inválidas');
      return false;
    }
  }, []);

  const generatePasswordRecoverCode = useCallback(async ({ email }) => {
    try {
      const response = await api.get(`access/recover/${email}`);
      toast.success('Enviado com sucesso!');
      return true;
    } catch (err) {
      console.log(err.message);
      toast.error(
        err.response.data?.message ||
          'Ops...Ocorreu um erro! Verifique suas informações!',
      );
      return false;
    }
  }, []);

  const validateCodeAndUpdate = useCallback(
    async ({ email, codigo, senha }) => {
      try {
        const resp = await api.post(`access/validate/${email}`, {
          codigo,
          senha,
        });
        return true;
      } catch (err) {
        toast.error(
          err.response.data?.message ||
            'Ops...Ocorreu um erro! Verifique suas informações!',
        );
        console.log(err);
        return false;
      }
    },
    [],
  );

  return (
    <AuthContext.Provider
      value={{
        signIn,
        generatePasswordRecoverCode,
        validateCodeAndUpdate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
