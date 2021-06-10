import { useContext } from "react";
import { BarChart, XAxis, YAxis, Bar } from "recharts";

import { ModalContext } from "../../../context/ModalContext";
import { Context } from "../../../context/ChartContext";
import { Container } from "./styles";

import EditIcon from "../../../assets/EditIcon.svg";
import TrashIcon from "../../../assets/TrashIcon.svg";

import { AnimatePresence } from "framer-motion";
import { opacityVariants } from "../../../constants/variants";

function Chart({ data }) {
  const { openEditModal } = useContext(ModalContext);
  const { activateChart, deleteChart } = useContext(Context);

  return (
    <AnimatePresence>
      <Container
        variants={opacityVariants}
        initial="start"
        animate="do"
        exit="end"
      >
        <header>
          <h3 style={{ color: data[0].color || "#FFCE54" }}>{data[0].name}</h3>
          <div className="chartIconsContainer">
            <div
              className="chartButton"
              style={{ backgroundColor: data[0].color || "#FFCE54" }}
              onClick={() => {
                activateChart(data);
                openEditModal();
              }}
            >
              <img src={EditIcon} alt="edit-icon" />
            </div>
            <div
              className="chartButton"
              style={{ backgroundColor: "#ff5555" }}
              onClick={() => {
                deleteChart(data[0].id);
              }}
            >
              <img src={TrashIcon} alt="edit-icon" />
            </div>
          </div>
        </header>
        <main>
          <legend>
            <div
              className="box"
              style={{ backgroundColor: data[0].color || "#FFCE54" }}
            ></div>
            <span className="first">Feitas</span>
            <div className="box" style={{ backgroundColor: "#6F7A84" }}></div>
            <span>Meta</span>
          </legend>
          <BarChart
            data={data}
            className="bob"
            width={325}
            height={200}
            barGap={10}
            margin={{ top: 0, right: 40, bottom: 0, left: -20 }}
          >
            <XAxis dataKey="date" fontSize="0.85rem" />
            <YAxis axisLine={false} fontSize="0.85rem" padding={{ top: 10 }} />
            <Bar
              dataKey="feitas"
              fill={data[0].color || "#FFCE54"}
              label={{ fill: "#f4f4f4", fontSize: "0.85rem" }}
              isAnimationActive={false}
              barSize={64}
            />
            <Bar
              dataKey="meta"
              fill="#6F7A84"
              label={{ fill: "#f4f4f4", fontSize: "0.85rem" }}
              isAnimationActive={false}
              barSize={64}
            />
          </BarChart>
        </main>
      </Container>
    </AnimatePresence>
  );
}

export default Chart;
