const getData = async (url = "", data = {}) => {
   const response = await fetch(url, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
   });
   const dataResult = await response.json();

   return dataResult;
};

export { getData };
