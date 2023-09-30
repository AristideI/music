export default function Album(props) {
  return (
    <div className="w-1/5 rounded-lg border-2 border-blue-200 p-4">
      <img className="w-full h-72 object-cover" src={props.cover} alt="" />
      <p className="font-semibold text-xl font-serif">{props.name}</p>
      <p className="font-serif text-xl">{props.year}</p>
    </div>
  );
}
