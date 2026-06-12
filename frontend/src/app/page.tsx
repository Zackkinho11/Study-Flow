"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);

  // Redireciona se já estiver logado (sessão simples)
  useEffect(() => {
    const session = localStorage.getItem("studyflow_session");
    if (session) {
      router.push("/timer");
    }
  }, [router]);

  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    if (!email || !senha) {
      setError(true);
      return;
    }

    // Busca usuários cadastrados no localStorage
    const usersJson = localStorage.getItem("studyflow_users");
    let users = usersJson ? JSON.parse(usersJson) : [];

    // Seed padrão caso não existam usuários
    if (users.length === 0) {
      const seedUser = {
        nome: "Admin Study Flow",
        username: "admin",
        email: "admin@studyflow.com",
        senha: "123456"
      };
      users.push(seedUser);
      localStorage.setItem("studyflow_users", JSON.stringify(users));
    }

    // Procura o usuário correspondente
    const user = users.find(
      (u: any) => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha
    );

    if (user) {
      // Salva sessão mockada
      localStorage.setItem(
        "studyflow_session",
        JSON.stringify({
          email: user.email,
          nome: user.nome,
          username: user.username,
          loginTime: new Date().getTime(),
          rememberMe
        })
      );
      router.push("/timer");
    } else {
      // Exibe erro do figma
      setError(true);
    }
  }, [email, senha, rememberMe, router]);

  const navigateToCadastro = useCallback(() => {
    router.push("/cadastro");
  }, [router]);

  return (
    <div className="w-full min-h-screen bg-[#29645e] lg:bg-[#f2fcfb] flex flex-col lg:flex-row leading-[normal] tracking-[normal] font-[Roboto]">
      
      {/* PAINEL ESQUERDO: Identidade Visual (Verde) */}
      <section className="w-full lg:w-[45%] bg-[#29645e] flex flex-col justify-center items-center py-10 lg:py-0 px-6 box-border text-white lg:min-h-screen select-none">
        <div className="flex flex-row items-center justify-center gap-4 max-w-full">
          <h1 className="m-0 text-5xl lg:text-7xl font-normal font-['Rubik_Bubbles'] tracking-wider drop-shadow-md">
            Study Flow
          </h1>
          <Image
            className="w-[120px] lg:w-[190px] h-auto object-cover filter drop-shadow-lg"
            priority
            width={190}
            height={255}
            alt="Study Flow Logo"
            src="/Picsart-25-06-23-14-17-57-475-1@2x.png"
          />
        </div>
      </section>

      {/* PAINEL DIREITO: Formulário de Login (Branco) */}
      <section className="flex-1 bg-white rounded-t-[30px] lg:rounded-t-none lg:rounded-l-[40px] shadow-[-10px_0px_30px_rgba(0,0,0,0.05)] flex flex-col justify-center items-center py-12 px-6 lg:px-16 box-border min-h-[60vh] lg:min-h-screen">
        <div className="w-full max-w-[480px] flex flex-col gap-8">
          
          {/* Título do formulário */}
          <div className="text-center">
            <h2 className="m-0 text-4xl lg:text-5xl font-medium text-[#29645e] tracking-tight">
              Study Flow
            </h2>
          </div>

          {/* Formulário de Login */}
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            
            {/* Banner de Erro Figma (Desktop - 38) */}
            {error && (
              <div className="w-full border border-red-500 rounded-[10px] bg-red-50 text-red-600 px-4 py-2 text-sm flex items-center justify-center gap-2 animate-fade-in font-medium">
                <AlertCircle size={16} className="shrink-0" />
                <span>Email e/ou senha informados são inválidos</span>
              </div>
            )}

            {/* Campo E-mail */}
            <div className="relative w-full shadow-[0px_4px_10px_rgba(0,0,0,0.1)] rounded-[20px] bg-white border border-gray-100 focus-within:border-[#29645e] focus-within:ring-1 focus-within:ring-[#29645e] transition duration-200">
              <input
                className="w-full bg-transparent border-none outline-none text-lg lg:text-xl py-4 px-6 text-center text-gray-800 placeholder-gray-400"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Campo Senha */}
            <div className="relative w-full shadow-[0px_4px_10px_rgba(0,0,0,0.1)] rounded-[20px] bg-white border border-gray-100 focus-within:border-[#29645e] focus-within:ring-1 focus-within:ring-[#29645e] transition duration-200 flex items-center">
              <input
                className="w-full bg-transparent border-none outline-none text-lg lg:text-xl py-4 pl-6 pr-12 text-center text-gray-800 placeholder-gray-400"
                placeholder="Senha"
                type={showSenha ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-4 text-gray-400 hover:text-[#29645e] focus:outline-none"
                onClick={() => setShowSenha(!showSenha)}
              >
                {showSenha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Checkbox Me manter conectado */}
            <div className="flex items-center gap-3 px-2">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800 select-none text-base">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 accent-[#29645e] cursor-pointer rounded"
                />
                <span>Me manter conectado</span>
              </label>
            </div>

            {/* Ações (Botões) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full mt-2">
              {/* Botão Entrar */}
              <button
                type="submit"
                className="cursor-pointer border-none bg-[#29645e] text-white hover:bg-[#1e4b47] transition duration-300 font-medium text-xl py-4 px-8 rounded-[20px] flex-1 shadow-[0px_4px_10px_rgba(0,0,0,0.15)] flex justify-center items-center active:scale-95"
              >
                Entrar
              </button>

              {/* Botão Criar Cadastro */}
              <button
                type="button"
                onClick={navigateToCadastro}
                className="cursor-pointer border border-[#29645e] bg-[#fafffe] text-[#29645e] hover:bg-[#e0f2f0] transition duration-300 font-medium text-xl py-4 px-6 rounded-[20px] flex-1 shadow-[0px_4px_10px_rgba(0,0,0,0.1)] flex justify-center items-center active:scale-95"
              >
                Criar cadastro
              </button>
            </div>

            {/* Link Problemas para Logar */}
            <div className="text-center mt-2">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  alert("Para redefinir sua senha, entre em contato com o suporte: suporte@studyflow.com");
                }}
                className="text-gray-500 hover:text-[#29645e] text-sm transition font-normal underline decoration-dotted"
              >
                Problemas para logar?
              </a>
            </div>

          </form>
        </div>
      </section>

    </div>
  );
};

export default Login;
