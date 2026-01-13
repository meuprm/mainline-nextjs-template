import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Suporte",
    questions: [
      {
        question: "Como funciona a integração com meu CRM?",
        answer:
          "PipeHub se conecta nativamente com HubSpot, Salesforce, Pipedrive e outros CRMs populares. A configuração é simples e leva apenas alguns minutos.",
      },
      {
        question: "O suporte é gratuito?",
        answer:
          "Sim! Todos os planos incluem suporte por email. Planos profissionais e enterprise têm suporte prioritário com SLA garantido.",
      },
      {
        question: "Posso personalizar os templates de documentos?",
        answer:
          "Sim! Você pode criar templates totalmente personalizados usando variáveis dinâmicas que são preenchidas automaticamente com dados do seu CRM.",
      },
    ],
  },
  {
    title: "Sua conta",
    questions: [
      {
        question: "Como faço para adicionar mais usuários?",
        answer:
          "Você pode adicionar usuários a qualquer momento através das configurações da conta. No plano gratuito, você tem até 3 usuários.",
      },
      {
        question: "Posso cancelar a qualquer momento?",
        answer:
          "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. Seus dados ficam disponíveis por 30 dias após o cancelamento.",
      },
    ],
  },
  {
    title: "Outras questões",
    questions: [
      {
        question: "Quais plataformas de assinatura digital vocês suportam?",
        answer:
          "Atualmente suportamos ClickSign, ZapSign, DocuSign e Adobe Sign. Estamos sempre adicionando novas integrações.",
      },
      {
        question: "Meus dados estão seguros?",
        answer:
          "Sim! Usamos criptografia de ponta a ponta, armazenamento em servidores seguros e cumprimos com LGPD. Seus dados são sempre privados e protegidos.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Perguntas frequentes
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Perguntas frequentes
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Não encontrou o que procura?{" "}
              <Link href="/contact" className="underline underline-offset-4">
                Entre em contato
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
