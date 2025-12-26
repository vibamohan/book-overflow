import { signInWithGoogle } from "../services/authService";

export function GoogleLoginButton() {
  return (
    <button
      onClick={signInWithGoogle}
      className="border px-4 py-2 rounded"
    >
      Sign in with Google
    </button>
  );
}
