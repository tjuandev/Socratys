import { useContext, useState } from "react";
import { Context } from "../../context/ChartContext";
import { ModalContext } from "../../context/ModalContext";

import { v4 as uuidv4 } from "uuid";
import format from "date-fns/format";
import { AnimatePresence, motion } from "framer-motion";

import { Container, HeaderGradient, CreateForm } from "../modalStyles";
import ColorSelecting from "../../components/Dashboard/ColorSelecting";
import { ButtonGradient } from "../../globalStyles";
import { opacityVariants, modalVariants } from "../../constants/variants";

function CreateChartModal() {
  const [colorActive, setColorActive] = useState("");
  const { createChart } = useContext(Context);

  const { isCreateChartModalOpen, closeChartModal } = useContext(ModalContext);

  return (
    <AnimatePresence>
      {isCreateChartModalOpen && (
        <Container
          variants={opacityVariants}
          initial="start"
          animate="do"
          exit="end"
        >
          <motion.div
            className="modalBox"
            variants={modalVariants}
            initial="start"
            animate="do"
            exit="end"
          >
            <HeaderGradient>
              <h4>CRIAR GRÁFICO</h4>
              <div onClick={closeChartModal}>
                <span>X</span>
              </div>
            </HeaderGradient>
            <CreateForm
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.target;

                const obj = {
                  name: `${target.nome.value} - ${format(new Date(), "dd/LL")}`,
                  meta: parseInt(target.meta.value),
                  feitas: parseInt(target.feitas.value),
                  color: colorActive,
                  id: uuidv4(),
                };

                createChart(obj);
                setColorActive("");
                closeChartModal();
              }}
            >
              <div className="formBoxContainer">
                <div>
                  <label htmlFor="name">Nome</label>
                  <input type="text" className="nameInput" name="nome" />
                </div>
                <ColorSelecting
                  colorActive={colorActive}
                  setColorActive={setColorActive}
                />
              </div>
              <div className="formBoxContainer questionsBox">
                <div>
                  <label htmlFor="meta">Meta do dia</label>
                  <input type="number" name="meta" />
                </div>
                <div>
                  <label htmlFor="feitas">Feitas de hoje</label>
                  <input type="number" name="feitas" required />
                </div>
              </div>
              <ButtonGradient type="submit">CRIAR</ButtonGradient>
            </CreateForm>
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default CreateChartModal;
