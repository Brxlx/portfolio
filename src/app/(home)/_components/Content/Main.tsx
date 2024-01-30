import { Masthead } from './Masthead';
import { Portfolio } from './Portflio';

export function Main() {
  return (
    <main className="w-full pt-24">
      <Masthead />
      <section className="my-10 flex flex-col items-center justify-center gap-6">
        <h1 className="mx-auto text-center text-3xl font-bold dark:text-orange-50">Portfolio .</h1>
        <p className="max-w-[35ch] text-pretty font-mono font-semibold md:max-w-[70ch]">
          Alguns dos projetos mais interessantes que construí ao longo do tempo.
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Portfolio
            img="/coding-6.png"
            title="Authr"
            content="Aplicação **full-stack** desenvolvida como um toolkit simples de autenticação com
              suporte a credenciais e via proveadores (*Google, Github, etc*) via OAuth.   
            **Tecnologias:**  Next.js(React), Node.js, Clerk(Autenticação), JWT, OAuth Token, Providers.                           
            *Work in Progress.*"
            link="https://github.com/Brxlx/authr"
          />
          <Portfolio
            img="/coding-3.jpg"
            title="Pizza Shop"
            content="Aplicação full-stack desenvolvida para controle e gerência de ação de usuários, fornecendo dados em real-time, gráficos e comandos gerais para administração.
            **Tecnologias:** Next.js(React), Node.js, Autenticação(Magic link), Tanstack Query(real-time and data fetching), NeonDB(Postgres), Real-time charts.
            "
            link="https://github.com/Brxlx/pizza-shop"
          />
          <Portfolio
            img="/coding.jpg"
            title="User's API"
            content="Web api construída com objetivo de prover todo CRUD de usuários em uma plataforma fechada, com diferencial de SSO e divisão de usuários por companhias.
            **Tecnologias**: Node.js, express, JWT, credentials, X-Token, DB PostgresSQL, Cache com Redis.
            "
          />
          <Portfolio
            img="/coding-2.jpg"
            title="SSO Authenticator"
            content="Microsserviço escrito com framework Nest js, parte de um sistema maior de apis e serviços, provendo autenticação customizada
            a usuários da plataforma.

            **Tecnologias:** Node.js, Restfull api, MongoDB, Redis, JWT Token, SSO, company login.
            "
          />
          <Portfolio
            img="/coding-5.jpg"
            title="App Mobile"
            content="Aplicação mobile de Ponto de Venda, com controle de estoque, leitor de código de barras, autenticação, carrinho de produtos     

            **Tecnologias:** React Native, Redux, Google Material UI, Google Play Store.
            "
          />
        </div>
      </section>
    </main>
  );
}
