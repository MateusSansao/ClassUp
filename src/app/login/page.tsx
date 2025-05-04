"use client";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <div className="absolute w-full h-[300px] bg-primary-500 bottom-0 [clip-path:polygon(0_100%,50%_0,100%_100%)]"></div>
      <div className="z-2 flex flex-col items-center justify-start w-full h-[100%]">
        <div>
          <img src="/logo.webp" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center justify-center w-[40%] p-4 bg-primary-100 rounded-md">
          <h1>Login</h1>
          <div>
            <div>
              <label>CPF</label>
              <input type="text" placeholder="Digite seu CPF" />
            </div>
            <div>
              <label>Senha</label>
              <input type="text" placeholder="Digite sua senha" />
            </div>
            <div>
              <p>Esqueceu sua senha?</p>
              <p>Quer começar a usar o ClassUp? Cadastre-se</p>
            </div>
          </div>
          <button>Entrar</button>
        </div>
      </div>
    </div>
  );
}
