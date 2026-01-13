"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Gratuito",
    monthlyPrice: "R$ 0",
    yearlyPrice: "R$ 0",
    description: "Grátis para todos",
    features: [
      "Até 3 usuários",
      "50 documentos por mês",
      "Integrações básicas",
      "Templates padrão",
    ],
  },
  {
    name: "Profissional",
    monthlyPrice: "R$ 99",
    yearlyPrice: "R$ 79",
    features: [
      "Todos os recursos gratuitos e...",
      "Usuários ilimitados",
      "Documentos ilimitados",
      "Todas as integrações",
      "Templates personalizados",
      "Suporte prioritário",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "Personalizado",
    yearlyPrice: "Personalizado",
    features: [
      "Todos os recursos profissionais e...",
      "SLA garantido",
      "Servidor dedicado",
      "Onboarding personalizado",
      "Gerente de sucesso dedicado",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Preços
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Comece gratuitamente com sua equipe. Faça upgrade para desbloquear documentos ilimitados, integrações avançadas e recursos adicionais.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "Startup"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      {plan.name !== "Gratuito" && plan.name !== "Enterprise" && (
                        <span className="text-muted-foreground">
                          por usuário/
                          {isAnnual ? "ano" : "mês"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== "Gratuito" && plan.name !== "Enterprise" ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Alternar cobrança anual"
                    />
                    <span className="text-sm font-medium">Cobrança anual</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "Profissional" ? "default" : "outline"}
                >
                  {plan.name === "Enterprise" ? "Falar com vendas" : "Começar agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
