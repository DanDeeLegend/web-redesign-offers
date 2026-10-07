"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, Clock, Mail, Phone, Plus } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Starfield } from "@/components/starfield";
import { Sparkle } from "@/components/icons";
import { faqs, site } from "@/lib/site";

export function Admissions() {
  return (
    <section id="admissions" aria-labelledby="admissions-title" className="bg-paper py-24 sm:py-32">
      <div className="container-x grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* CTA card */}
        <Reveal className="grain relative isolate overflow-hidden rounded-[32px] bg-navy-900 p-8 text-white sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_400px_at_0%_100%,rgba(26,128,232,.45),transparent_60%)]" />
          <Starfield className="-z-10 opacity-70" density={0.0003} />
          <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[.2em] text-cream-300 uppercase">
            <Sparkle className="size-3" /> Admissions
          </p>
          <h2 id="admissions-title" className="font-display text-[clamp(2rem,1.4rem+2.2vw,3.2rem)] leading-[1.08] tracking-[-.02em]">
            Would you like your child to join our <em className="text-azure-400">ever-growing</em> community?
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            Our admissions team will guide you from your first enquiry to your child&rsquo;s very first day.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.links.enrol} size="lg">
              Enrol Now <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" aria-hidden />
            </ButtonLink>
            <ButtonLink href={`mailto:${site.emails[0].value}`} size="lg" variant="ghost">
              Email admissions
            </ButtonLink>
          </div>

          <ul className="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-azure-300" aria-hidden />
              <div className="text-sm">
                <p className="text-white/50">Call</p>
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="block font-medium hover:underline">{p.label}</a>
                ))}
              </div>
            </li>
            <li className="flex gap-3 sm:col-span-2 sm:row-start-1">
              <Mail className="mt-0.5 size-4 shrink-0 text-azure-300" aria-hidden />
              <div className="min-w-0 text-sm">
                <p className="text-white/50">Email</p>
                <a href={`mailto:${site.emails[0].value}`} className="block font-medium [overflow-wrap:anywhere] hover:underline">{site.emails[0].value}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-azure-300" aria-hidden />
              <div className="text-sm">
                <p className="text-white/50">Office hours</p>
                <p className="font-medium">{site.hours}</p>
              </div>
            </li>
          </ul>
        </Reveal>

        {/* FAQ */}
        <Reveal delay={0.1} className="flex flex-col">
          <h3 className="mb-6 font-display text-3xl">Questions parents ask</h3>
          <Accordion.Root type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`item-${i}`} className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(2,37,71,.06)] ring-1 ring-navy-900/5 transition data-[state=open]:shadow-[0_20px_40px_-24px_rgba(2,37,71,.35)]">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 p-5 text-left font-semibold sm:px-6">
                    {f.q}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-azure-50 text-azure-600 transition duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-azure-500 group-data-[state=open]:text-white">
                      <Plus className="size-4" aria-hidden />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-navy-900/70 data-[state=closed]:animate-[collapse_.3s_ease] data-[state=open]:animate-[expand_.3s_ease]">
                  <p className="px-5 pb-5 sm:px-6">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
