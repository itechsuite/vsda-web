export const CustomResponse = ({ data, message, error, code }) => {
  const isOk = code >= 200 <= 300;

  if (isOk)
    return {
      isOk,
      data,
      message,
      error,
    };

  if (error.name === "AxiosError") {
    return {
      isOk: false,
      message,
      error,
    };
  }

  return {
    isOk: false,
    data: {},
    message,
  };
};
