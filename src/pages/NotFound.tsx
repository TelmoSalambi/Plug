import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

export default function NotFoundPage() {
  return (
    <section className="site-container flex min-h-[70svh] items-center justify-center py-28 text-center">
      <div className="relative max-w-2xl">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/[0.07] blur-[100px]"
          aria-hidden="true"
        />
        <p className="section-kicker justify-center">Erro 404</p>
        <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
          Esta página não foi encontrada.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-400">
          O endereço pode estar incorrecto ou a página já não existir. Volte ao início ou explore as
          marcas do Grupo Plug Business.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="button-primary">
            <Icon.ArrowLeft size={17} /> Voltar ao início
          </Link>
          <Link to={{ pathname: "/", hash: "#marcas" }} className="button-secondary">
            Explorar marcas <Icon.ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
