import { icons } from "../utils/data";

const Icons = () => {
  const { id, title, Element, size, color, padding, name } = icons;

  return (
    <>
      {icons.map((icon) => (
        <span key={id} title={title} className="technologies">
          <Element size={size} className={color} />
          <small className={`font-semibold ${padding}`}>{name}</small>
        </span>
      ))}
    </>
  );
};

export default Icons;
