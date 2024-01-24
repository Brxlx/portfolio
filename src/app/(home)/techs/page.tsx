import { Techs } from '../_components/Content/Techs';
import { Footer } from '../_components/Footer';
import { Header } from '../_components/Header';
import { Tecnologies } from '../_components/Tecnologies/Tecnologies';

export default function TechsPage() {
  return (
    <>
      <Header />
      <Techs />
      <Tecnologies header="Main Stack" />
      <Tecnologies header="Studying" />
      <Tecnologies header="Infra" />
      <Tecnologies header="Cloud" />
      <Footer />
    </>
  );
}
