import yelpClient from "../client/yelp.client";

export const yelpServices = ()=>{

  const getBusinesses = async(query: string)=>{
    const response = await yelpClient.get("/search", {
      params: {
        term: { query },
        limit: 40,
        location: "san francisco",
      },
    });
    return response.data.businesses;
  }

  return {
    getBusinesses
  }
}
