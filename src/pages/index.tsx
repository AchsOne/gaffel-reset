import { useState } from 'react';
import {supabase} from "../../lib/supabaseClient";

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordUpdate = async () => {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
    } else {
      setSubmitted(true);
    }
  };

  return (
      <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <h1>Passwort zurücksetzen</h1>
        {submitted ? (
            <p>✅ Dein Passwort wurde erfolgreich geändert.</p>
        ) : (
            <>
              <input
                  type="password"
                  placeholder="Neues Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
              />
              <button
                  onClick={handlePasswordUpdate}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#000',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                  }}
              >
                Passwort ändern
              </button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </>
        )}
      </main>
  );
}
