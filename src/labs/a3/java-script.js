import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import WorkingWithFunctions from "./working-with-functions";
import WorkingWithArrays from "./working-with-arrays";
import TemperalLiterals from "./temperal-literals";
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructuring";
import FunctionDestructing from "./function-destructuring";

function JavaScript() {
  console.log("Hello World!");

  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <TemperalLiterals />
      <House />
      <Spread />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}
export default JavaScript;
