import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export function ContextProvider({ children }) {
  const [chartsArray, setChartsArray] = useState([]);
  const [chartActive, setChartActive] = useState([{}]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    let data = window.localStorage.getItem("charts");

    if (data) {
      setChartsArray(JSON.parse(data));
    }
  }, []);

  const createChart = (data) => {
    const newChartsArray = [...chartsArray, data];
    window.localStorage.setItem("charts", JSON.stringify(newChartsArray));
    setChartsArray(newChartsArray);
  };

  const activateChart = (data) => {
    setChartActive(data);
  };

  const updateChartInfo = (data) => {
    const idObjectToEdit = chartActive[0].id;

    const newChartsArray = chartsArray.map((chart) => {
      if (chart.id === idObjectToEdit) {
        chart.meta = data.meta;
        chart.feitas = data.feitas;
        chart.color = data.color;
      }

      return chart;
    });

    setChartsArray(newChartsArray);
    window.localStorage.setItem("charts", JSON.stringify(newChartsArray));
  };

  const deleteChart = (id) => {
    const newChartsArray = chartsArray.filter((chart) =>
      chart.id === id ? false : true
    );

    setChartsArray(newChartsArray);
    window.localStorage.setItem("charts", JSON.stringify(newChartsArray));
  };

  return (
    <Context.Provider
      value={{
        chartsArray,
        chartActive,
        searchItem,
        createChart,
        activateChart,
        updateChartInfo,
        deleteChart,
        setSearchItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}
