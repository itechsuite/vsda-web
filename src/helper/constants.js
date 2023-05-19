import NumberFormat from "react-number-format";

export const CurrencyFormatter = (x) => {
  return "₦" + x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  //   return <NumberFormat value={x} displayType="text" thousandSeparator={true} />;
};
