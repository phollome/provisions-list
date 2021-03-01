import Card from "./Card";

const List = (props: {
  data: { _id: number; name: string; value?: number }[];
  options: { positiveOnly: boolean };
  onChange?: (item: { _id: number; name: string; value: number }) => void;
}) => {
  const handleChange = (state: {
    _id: number;
    name: string;
    value: number;
  }) => {
    const item = props.data.find((elem) => elem._id === state._id);
    if (item !== undefined && props.onChange !== undefined) {
      // only invoke onChange if value really changed
      if (
        (item.value === undefined && state.value !== 0) ||
        (item.value !== undefined && item.value !== state.value)
      ) {
        props.onChange({ ...state });
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
