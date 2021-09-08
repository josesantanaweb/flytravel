import clientAxios from "../../config/axios";

export const makePaymentApi = async (body, loading, dispatch) => {
  if (loading) {
    loading(true);
  }
  try {
    const { data } = await clientAxios.post("/payment", body);

    return data;
  } catch ({ request, response, ...error }) {
    console.log("request", request);
    console.log("response", response);
    console.log("error", error);

    if (response) {
      // const message = response.data.message;
      // dispatch({ type: ERROR_GETTING_AVAILABILITY, payload: message });
      return response.data;
    } else {
      // dispatch({
      //   type: ERROR_GETTING_AVAILABILITY,
      //   payload: "Ha ocurrido un error, intente de nuevo más tarde",
      // });
      return null;
    }
  } finally {
    loading(false);
  }
};
