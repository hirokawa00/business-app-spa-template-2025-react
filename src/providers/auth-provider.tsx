import { createContext, type ReactNode, useState } from 'react';

// 認証状態の型定義
interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

// 認証コンテキストの作成
export const AuthContext = createContext<AuthContextType | null>(null);

// 認証プロバイダー
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // 実際のアプリケーションでは、ここでAPIコールを行う
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 模擬遅延

      // 簡単な認証チェック（実際の実装では適切な検証を行う）
      if (email === 'user@example.com' && password === 'password') {
        setUser({
          id: '1',
          name: 'John Doe',
          email: 'user@example.com',
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
