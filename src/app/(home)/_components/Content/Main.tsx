import '@/app/gradient-card.css';

import { Masthead } from './Masthead';

export function Main() {
  return (
    <main className="w-full pt-24">
      <Masthead />
      <section className="my-10 flex flex-col items-center justify-center gap-6">
        <h1 className="mx-auto text-center text-3xl font-bold dark:text-orange-50">Portfolio .</h1>
        <p>Em breve.</p>
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
           <Portfolio
            img={img.src}
            title="Something awesome"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab veritatis nam
          omnis quibusdam vel, mollitia consequuntur quasi laborum illo magni dolor voluptatum
          repellendus nobis nostrum nemo nulla, placeat dignissimos!"
          />
          <Portfolio
            img={img.src}
            title="Something awesome"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab veritatis nam
          omnis quibusdam vel, mollitia consequuntur quasi laborum illo magni dolor voluptatum
          repellendus nobis nostrum nemo nulla, placeat dignissimos!"
          />
          <Portfolio
            img={img.src}
            title="Something awesome"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab veritatis nam
          omnis quibusdam vel, mollitia consequuntur quasi laborum illo magni dolor voluptatum
          repellendus nobis nostrum nemo nulla, placeat dignissimos!"
          /> 
            </div> */}
      </section>
    </main>
  );
}
