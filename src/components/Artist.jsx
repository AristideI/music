import Album from "./Album";

export default function Artist(props) {
  return (
    <section className="w-full h-96 bg-opacity-70 my-12 rounded-2xl p-8">
      <section className="flex justify-between items-center">
        <section>
          <p className="font-serif font-bold text-7xl">{props.dataa[0].name}</p>
          <p className="font-serif text-2xl font-medium">
            {props.dataa[0]["real_name"]}
          </p>
        </section>
        <section className="w-1/2 h-[27rem] ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={props.dataa[0].photo}
            alt=""
          />
        </section>
      </section>
      <section className="flex justify-between gap-4 mt-12">
        {props.dataa[0].albums.map((elt) => (
          <Album
            key={elt.title}
            name={elt.title}
            cover={elt.cover}
            year={elt["release_year"]}
          />
        ))}
      </section>
    </section>
  );
}
