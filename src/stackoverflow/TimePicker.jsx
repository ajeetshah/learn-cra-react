import * as React from "react";
import { Field, makeStyles } from "@fluentui/react-components";
import { TimePicker } from "@fluentui/react-timepicker-compat";

const useStyles = makeStyles({
  root: {
    maxWidth: "300px",
  },
});

export const MyTimePicker = (props) => {
  const styles = useStyles();
  return (
    <Field label="Coffee time" className={styles.root}>
      <TimePicker {...props} />
      <TimePicker
        startHour={0}
        endHour={24}
        required={true}
        freeform={true}
        // selectedTime={selectedTime}
        // onTimeChange={onChangeHandlerTime}
        // value={value.current}
        style={{
          minWidth: 100,
        }}
      />
    </Field>
  );
};
