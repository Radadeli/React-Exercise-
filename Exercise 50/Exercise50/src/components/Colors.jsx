import Color from "./Color";

export function Colors() {
  const colorList = [
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Green" },
    { id: 4, name: "Blak" },
    { id: 5, name: "Grey" },
    { id: 6, name: "Sky blue" },
  ];

  return (
    <div>
      <h1>List of Colors</h1>
      <ul>
        {colorList.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </div>
  );
}

export default Colors;
