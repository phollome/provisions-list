import { ListProps, CardData } from "../types";
import Card from "./Card";

const List = (props: ListProps) => {
  const handleChange = (data: CardData) => {
    const item = props.data.find((elem) => elem._id === data._id);
    if (item !== undefined && props.onChange !== undefined) {
      // only invoke onChange if value really changed
      if (
        (item.value === undefined && data.value !== 0) ||
        (item.value !== undefined && item.value !== data.value)
      ) {
        props.onChange({ ...data });
      }
    }
  };

  return (
    <>
      {props.data.length > 0 ? (
        props.data.map((item) => (
          <Card
            key={item._id}
            {...item}
            {...props.options}
            onChange={handleChange}
            classList="mb-2 last:mb-0"
          />
        ))
      ) : (
        <p data-testid="placeholder">...</p>
      )}
    </>
  );
};

List.defaultProps = {
  data: [],
  options: { positiveOnly: true },
};

export default List;
