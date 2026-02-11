import LoginForm from "../components/LoginForm";

export default function Login({ setUser }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg_img.png')] bg-cover">
      <LoginForm setUser={setUser} />
    </div>
  );
}
