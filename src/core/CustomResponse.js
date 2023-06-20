export const CustomResponse = ({ data, message, error, code }) => {
  console.log(code);
  let isOk = Number(code) >= 200 && Number(code) < 300 ? true : false;
  // if (code >= 200 && code < 300) {
  //   isOk = true;
  // } else {
  //   isOk = false;
  // }
  // const isOk = Number(code) >= 200 < 300;
  console.log(isOk);

  if (isOk === true)
    return {
      isOk: true,
      data,
      message,
      error,
      code,
    };

  // if (error.name === "AxiosError") {
  //   return {
  //     isOk: false,
  //     message,
  //     error,
  //     code,
  //   };
  // }

  return {
    isOk: false,
    data: { maggi: "tamtam" },
    message,
    code,
  };
};
