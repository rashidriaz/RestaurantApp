import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer 1oVs9itmd07fbKgcpH5SRtKfEXXgMBkIEcKQyoAKWLGDFFGin1B3D2CDBPvAGXMRgCioeC__tPvEAmQ3soUmJOv6lc4ODCGT2YsX6hc0UF6G3K9a-ehNQCYUtopaY3Yx",
  },
});
