import { icons } from "../utils/data";

const Icons = () => {
  return (
    <>
      {icons.map((icon) => (
        <span key={icon.id} title={icon.title} className="technologies">
          <icon.Element size={icon.size} className={icon.color} />
          <small className={`font-semibold ${icon?.padding}`}>
            {icon.name}
          </small>
        </span>
      ))}
    </>
  );
};

export default Icons;
