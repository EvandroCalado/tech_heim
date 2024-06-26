import { Container } from '@/components/global';
import { FC } from 'react';

export interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <section>
      <Container className="my-20 space-y-8">
        <h1 className="flex flex-wrap items-center justify-center gap-2 text-4xl font-bold leading-none tracking-wide text-primary sm:gap-x-6 sm:text-7xl">
          Tech
          <span className="rounded-lg bg-orange-500 px-4 py-2 tracking-widest text-muted">
            Heim
          </span>
        </h1>

        <h2 className="text-base font-semibold sm:text-lg lg:text-xl">
          Bem-vindo à Tech Heim – Sua Loja Online de Tecnologia!
        </h2>
        <p className="text-lg sm:text-xl">
          Na Tech Heim, estamos empenhados em trazer o melhor da tecnologia
          diretamente para você. Nossa loja online oferece uma vasta seleção de
          computadores, laptops, periféricos, acessórios e muito mais, tudo
          escolhido com cuidado para atender às suas necessidades tecnológicas.
        </p>

        <h4 className="text-base font-semibold sm:text-lg lg:text-xl">
          Por que escolher a Tech Heim?
        </h4>

        <ul className="ml-8 list-disc text-base sm:text-lg lg:text-xl">
          <li>
            <strong>Variedade Incomparável:</strong> Desde os mais recentes
            modelos de laptops e desktops até acessórios essenciais como mouses,
            teclados e monitores, temos tudo o que você precisa para montar seu
            setup perfeito.
          </li>
          <li>
            <strong>Qualidade Garantida:</strong> Trabalhamos com as principais
            marcas do mercado para garantir que você receba produtos de alta
            qualidade e desempenho.
          </li>
          <li>
            <strong>Preços Competitivos:</strong> Oferecemos preços imbatíveis e
            promoções exclusivas para que você possa adquirir os melhores
            produtos sem gastar muito.
          </li>
          <li>
            <strong>Atendimento ao Cliente de Excelência:</strong> Nossa equipe
            está sempre pronta para ajudar com qualquer dúvida ou suporte
            técnico que você precise.
          </li>
          <li>
            <strong>Entrega Rápida e Segura:</strong> Comprometidos com a sua
            satisfação, garantimos que seus pedidos cheguem rapidamente e em
            perfeito estado.
          </li>
        </ul>

        <p className="text-base sm:text-lg lg:text-xl">
          Explore nossa loja e descubra um mundo de tecnologia ao seu alcance.
          Seja para trabalho, estudo ou lazer, a Tech Heim tem a solução ideal
          para você!
        </p>
      </Container>
    </section>
  );
};

export default About;
