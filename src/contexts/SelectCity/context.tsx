import { createContext } from "react";
import { Props, ContextType } from "./types";
import axios from "axios";

export const SelectCityContext = createContext<Partial<ContextType>>({});

const SelectCityProvider = ({ children }: Props) => {
  const getListOfCities = async (city: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/cities?query=${city}`
      );

      if (response.data?.cities && Array.isArray(response.data.cities)) {
        return response.data.cities.map((city: string) => ({
          value: city,
          label: city,
        }));
      }
    } catch (error: any) {
      throw Error(
        error.response?.data?.message ||
          `Error with downloading cities from server: ${error}`
      );
    }
  };

  return (
    <SelectCityContext.Provider value={{ getListOfCities }}>
      {children}
    </SelectCityContext.Provider>
  );
};

export default SelectCityProvider;
