import { useEffect, useState } from "react";
import Button from "./Button";

const Dialog = (props: {
  visible: boolean;
  onSubmit?: React.MouseEventHandler;
}) => {
  const { visible } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  const handleClose = () => {
    setShow(false);
  };

  return show ? (
    <div
      data-testid="dialog-background"
      role="dialog"
      className="fixed inset-0 z-40 w-full flex items-end bg-black bg-opacity-20"
    >
      <div
        data-testid="dialog"
        className="w-full p-4 overflow-hidden bg-white border rounded-t-lg"
      >
        {props.onSubmit !== undefined ? (
          <Button
            data-testid="submit-button"
            label="Submit"
            onClick={props.onSubmit}
          />
        ) : null}
        <Button
          data-testid="close-button"
          label="Close"
          onClick={handleClose}
        />
      </div>
    </div>
  ) : null;
};

Dialog.defaultProps = {
  visible: false,
};

export default Dialog;
