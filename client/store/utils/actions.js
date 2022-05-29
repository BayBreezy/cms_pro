import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export default {
  async ExportData({ commit }, payload) {
    try {
      commit("setLoader", true);
      const workbook = new ExcelJS.Workbook();
      workbook.created = payload.created || new Date();
      workbook.creator = payload.creator || "CMS Pro";
      // Add sheet
      let sheet = workbook.addWorksheet(payload.sheetName || "Sheet 1");

      // Add column headers
      sheet.columns = payload.headers.map((header) => {
        return {
          header: header.charAt(0).toUpperCase() + header.slice(1),
          key: header,
          width: header.length * 3,
        };
      });

      //update style of first row
      sheet.getRow(1).font = {
        bold: true,
      };
      // Add data
      sheet.addRows(payload.data);

      // Save the file
      const buffer = await workbook.xlsx.writeBuffer();
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        payload.fileName || "export.xlsx"
      );

      commit("setLoader", false);
    } catch (error) {
      commit("setLoader", false);
      console.log(error);
    }
  },
};
