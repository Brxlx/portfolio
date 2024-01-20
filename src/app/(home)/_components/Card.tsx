import Image from 'next/image';

export function Card() {
  return (
    <div className="sticky top-0 flex h-screen w-full items-end justify-center text-white">
      <div className="mb-[calc(5vh-3%)] flex flex-col gap-6 p-4">
        <h1 className="text-3xl drop-shadow-md">Título interessante</h1>
        <p className="leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sapiente quibusdam.
          Nobis possimus, exercitationem sapiente ea eum pariatur consectetur veniam dolor tenetur
          ducimus accusamus odio fuga. Omnis ipsam consequuntur nesciunt!
        </p>
        <Image
          src="https://source.unsplash.com/random/1000x1000"
          alt=""
          width={1000}
          height={1000}
          className="absolute left-0 top-0 -z-[1] h-full w-full object-cover brightness-50"
        />
      </div>
    </div>
  );
}
