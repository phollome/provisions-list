import * as React from "react";
import classnames from "classnames";
import Button, { ButtonProps } from "./Button";

interface DialogProps {
  actions?: ButtonProps[];
  children?: React.ReactChild | React.ReactChild[];
  important: boolean;
  onSubmit?: React.MouseEventHandler;
  visible: boolean;
  insideDocs: boolean;
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

  const containerClassNames = classnames(
    "w-full flex items-end bg-black bg-opacity-20",
    props.insideDocs ? "" : "fixed inset-0 z-40"
  );

  return show ? (
    <div
      data-testid="dialog-background"
      role="dialog"
      className={containerClassNames}
      onClick={props.important ? undefined : handleClose}
      aria-hidden="true"
    >
      <div
        data-testid="dialog"
        onClick={(evt) => evt.stopPropagation()}
        className="w-full p-4 overflow-hidden bg-white border rounded-t-lg"
        aria-hidden="true"
      >
        {props.children !== undefined ? props.children : null}
        <div className="mt-4">
          {props.actions !== undefined
            ? props.actions.map((action) => {
                const classNames = classnames(action.classList, "mb-2");
                return (
                  <Button
                    key={action.label}
                    {...action}
                    classList={classNames}
                  />
                );
              })
            : null}
          {props.onSubmit !== undefined ? (
            <Button
              data-testid="submit-button"
              label="Submit"
              classList="mb-2"
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
  insideDocs: false,
};

export default Dialog;
