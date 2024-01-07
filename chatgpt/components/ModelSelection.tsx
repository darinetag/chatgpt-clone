"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div>
      <Select
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          container: (state) => "bg-[#434654] border-[#434654]",
          group: (state) => "bg-[#434654] border-[#434654]",
          option: (state) => "bg-[#434654] border-[#434654]",
          control: (state) => "bg-[#434654] border-[#434654]",
          input: (state) => "text-white",
          menu: (state) => "bg-[#434654] border-[#434654]",
        }}
        options={models?.modelOptions}
        placeholder={model}
        defaultValue={model}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
