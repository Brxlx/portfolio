import { techs } from '@/consts';

import { Techs } from '../_components/Content/Techs';
import { Footer } from '../_components/Footer';
import { Header } from '../_components/Header';
import { Tecnologies } from '../_components/Tecnologies/Tecnologies';

export default function TechsPage() {
  return (
    <>
      <Header />
      <Techs />
      {techs.map((tech, i) => (
        <Tecnologies key={i} header={tech.header} techs={tech.techs} />
      ))}
      <Footer />
    </>
  );
}
