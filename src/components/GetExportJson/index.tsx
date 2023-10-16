import exportFromJSON from "export-from-json";

export default async function ExportTable(JsonData: [], tableName: string) {
  const dataHoje = new Date().toLocaleDateString();
  const data = JsonData;
  const fileName = tableName + " - " + dataHoje;
  const exportType = exportFromJSON.types.xls;

  exportFromJSON({ data, fileName, exportType });
}
