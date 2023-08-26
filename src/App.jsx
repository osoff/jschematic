import schema from "../data/schema.json";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import Select from "./components/Select";
import { useReadschema } from "./hooks/useReadschema";
export default function App() {
  const datas = useReadschema(schema);

  function handleSubmit(info) {
    console.log(info);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {datas.map((el, i) =>
          el.enum && el.type !== "boolean" ? (
            <Select key={i} title={el.title} opt={el.enum} />
          ) : (el.enum || el.default !== undefined) && el.type === "boolean" ? (
            <CheckBox key={i} title={el.title} />
          ) : (
            <Input key={i} title={el.title} />
          )
        )}
        <Button>Send</Button>
      </form>
    </>
  );
}
