const createQueryString = (
  searchParams: URLSearchParams,
  paramsArray: { name: string; value: string }[],
) => {
  const params = new URLSearchParams(searchParams.toString());
  paramsArray.forEach(({ name, value }) => {
    params.set(name, value);
  });

  return params.toString();
};

export default createQueryString;
