import * as React from "react";
import Button from "./Button";
export interface DialogProps {
  children?: React.ReactChild | React.ReactChild[];
  visible: boolean;
  important: boolean;
  onSubmit?: React.MouseEventHandler;
}

function Dialog(props: DialogProps) {
  const { visible } = props;
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
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
      onClick={props.important ? undefined : handleClose}
      aria-hidden="true"
    >
      <div
        data-testid="dialog"
        className="w-full p-4 overflow-hidden bg-white border rounded-t-lg"
      >
        {props.children !== undefined ? props.children : null}
        <div className="mt-4">
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
    </div>
  ) : null;
}

Dialog.defaultProps = {
  visible: false,
  important: false,
};

export default Dialog;
