import Album from "./Album";

export default function Artist() {
  return (
    <section className="w-full h-96 bg-opacity-70 my-12 rounded-2xl p-8">
      <section className="flex justify-between items-center">
        <section>
          <p className="font-serif font-bold text-7xl">Beyonce</p>
          <p className="font-serif text-2xl font-medium">
            Beyoncé Giselle Knowles-Carter
          </p>
        </section>
        <section className="w-1/2 h-[27rem] ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/images/beyonce.jpg"
            alt=""
          />
        </section>
      </section>
      <section className="flex justify-between gap-4 mt-12">
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </section>
    </section>
  );
}
