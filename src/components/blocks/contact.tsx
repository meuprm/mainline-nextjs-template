import React from "react";

import Link from "next/link";

import { Facebook, Linkedin, Twitter } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Escritório",
    content: (
      <p className="text-muted-foreground mt-3">
        São Paulo - SP
        <br />
        Brasil
      </p>
    ),
  },
  {
    title: "Envie um email",
    content: (
      <div className="mt-3">
        <div>
          <p className="">Carreiras</p>
          <Link
            href="mailto:carreiras@pipehub.com.br"
            className="text-muted-foreground hover:text-foreground"
          >
            carreiras@pipehub.com.br
          </Link>
        </div>
        <div className="mt-1">
          <p className="">Suporte</p>
          <Link
            href="mailto:suporte@pipehub.com.br"
            className="text-muted-foreground hover:text-foreground"
          >
            suporte@pipehub.com.br
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Siga-nos",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Facebook className="size-5" />
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
        >
          <Twitter className="size-5" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Entre em contato
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Estamos aqui para ajudar. Responderemos o mais rápido possível.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Perguntas</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
