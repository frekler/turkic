'use client';

import { useState } from 'react';
import Button from '@/app/components/Button';

interface Claim {
  id: string;
  name: string;
  code: string;
  timestamp: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!password.trim()) {
      setError('Please enter password');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/admin/claims?password=${encodeURIComponent(password)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setAuthenticated(true);
      setClaims(data.claims);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const refreshClaims = async () => {
    if (!authenticated) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/admin/claims?password=${encodeURIComponent(password)}`);
      const data = await response.json();

      if (response.ok) {
        setClaims(data.claims);
      }
    } catch {
      setError('Failed to refresh claims');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-stone-100 p-8">
        <div className="max-w-md mx-auto">
          <div className="bg-stone-50 border-2 border-amber-600 p-8 shadow-lg">
            <h1 className="text-2xl font-serif font-bold text-stone-800 mb-6 text-center">
              Панель администратора
            </h1>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 font-serif">
                {error}
              </div>
            )}

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль администратора"
              className="w-full p-4 mb-4 font-serif border-2 border-amber-600 bg-amber-50 text-stone-800"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />

            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-amber-700 hover:bg-amber-800 text-amber-50 px-6 py-4 font-serif font-bold border-2 border-amber-800"
            >
              {loading ? 'Проверка...' : 'Войти'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-stone-50 border-2 border-amber-600 p-8 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-serif font-bold text-stone-800">
              Заявки на получение подарков
            </h1>
            <div className="flex gap-4">
              <Button
                onClick={refreshClaims}
                disabled={loading}
                className="bg-amber-700 hover:bg-amber-800 text-amber-50 px-6 py-3 font-serif font-bold border-2 border-amber-800"
              >
                {loading ? 'Обновление...' : 'Обновить'}
              </Button>
              <Button
                onClick={() => setAuthenticated(false)}
                className="bg-stone-600 hover:bg-stone-700 text-white px-6 py-3 font-serif font-bold border-2 border-stone-700"
              >
                Выйти
              </Button>
            </div>
          </div>

          {claims.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl font-serif text-stone-600">
                Пока нет заявок
              </p>
              <p className="text-stone-500 font-serif mt-2">
                Заявки появятся здесь после прохождения пользователями квиза
              </p>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded">
                <p className="text-sm font-serif text-amber-800">
                  <strong>Для локальной разработки:</strong> Заявки сохраняются в локальной SQLite базе данных.
                  Проверьте логи функций в терминале для отладки.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <p className="text-lg font-serif text-stone-700">
                  Всего заявок: <strong>{claims.length}</strong>
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white border-2 border-amber-600">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="border border-amber-600 p-4 text-left font-serif font-bold text-stone-800">
                        №
                      </th>
                      <th className="border border-amber-600 p-4 text-left font-serif font-bold text-stone-800">
                        Имя в Telegram
                      </th>
                      <th className="border border-amber-600 p-4 text-left font-serif font-bold text-stone-800">
                        Код
                      </th>
                      <th className="border border-amber-600 p-4 text-left font-serif font-bold text-stone-800">
                        Дата и время
                      </th>
                      {/* <th className="border border-amber-600 p-4 text-left font-serif font-bold text-stone-800">
                        ID заявки
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {claims.map((claim, index) => (
                      <tr key={claim.id} className="hover:bg-amber-50">
                        <td className="border border-amber-300 p-4 font-serif text-stone-800">
                          {index + 1}
                        </td>
                        <td className="border border-amber-300 p-4 font-serif text-stone-800 font-semibold">
                          {claim.name}
                        </td>
                        <td className="border border-amber-300 p-4 font-mono text-lg font-bold text-amber-900 bg-amber-50">
                          {claim.code}
                        </td>
                        <td className="border border-amber-300 p-4 font-serif text-stone-700">
                          {formatDate(claim.timestamp)}
                        </td>
                        {/* <td className="border border-amber-300 p-4 font-mono text-sm text-stone-600">
                          {claim.id}
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}