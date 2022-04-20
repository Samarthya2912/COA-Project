import { useContext, useState } from "react";
import { resourceContext } from "../contexts/resources";
import getNewMachineState from "../functions/getNewMachineState";
import bitset from "../bitset";
import useIO from "./useIO";

const useExecute = () => {
  const [resources, setResources] = useContext(resourceContext);
  const [,getInput,getOutput] = useIO();

  const setNewMachineState = () => {
    if(resources.registers["INTERRUPT"].to_bool() && resources.registers["FGI"].to_bool()) { 
      getInput();
      return;
    }

    if(resources.registers["INTERRUPT"].to_bool() && resources.registers["FGO"].to_bool()) { 
      getOutput();
      return;
    }

    let index = resources.registers["PC"].to_decimal();
    let [i, j] = [Math.floor(index / 8), index % 8];
    const machine_code = resources["MEMORY"][i][j];
    const newMachineState = getNewMachineState(machine_code, resources);
    if (newMachineState) setResources(newMachineState);
  };

  const resetMachine = () => {
    let newMachineState = { ...resources, MEMORY: [...resources.MEMORY] };

    for (let register in resources.registers) {
      newMachineState.registers[register].clear();
    }

    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 8; j++) {
        newMachineState.MEMORY[i][j].clear();
      }
    }

    setResources(newMachineState);
  };

  return [setNewMachineState, resetMachine];
};

export default useExecute;
