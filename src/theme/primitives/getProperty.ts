import { ifElse, always, isNil } from "ramda";

export const getProperty = (tfn: any) => (fn: any) => (getter: any) => (
  property: string
) => (props: any) =>
  ifElse(isNil, always(""), x => tfn(property, x, fn, props.theme))(
    getter(props)
  );
