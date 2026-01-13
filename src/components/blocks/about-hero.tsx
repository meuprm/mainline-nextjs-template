import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "10K+",
    label: "Empresas",
  },
  {
    value: "500K+",
    label: "Documentos gerados",
  },
  {
    value: "2M+",
    label: "Assinaturas coletadas",
  },
  {
    value: "98%",
    label: "Satisfação dos clientes",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Democratizando a automação de vendas
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            PipeHub está transformando a forma como empresas vendem e fecham negócios.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            Na PipeHub, somos dedicados a transformar a maneira como equipes de vendas trabalham. Nossa missão é eliminar processos manuais, reduzir tempo de fechamento e aumentar a produtividade através de automação inteligente e integrações perfeitas.
            <br />
            <br />
            Somos obcecados pelos nossos clientes — investimos tempo para entender cada aspecto do seu processo de vendas para que você possa operar melhor do que nunca. Estamos juntos nessa, porque seu sucesso é o nosso sucesso.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
