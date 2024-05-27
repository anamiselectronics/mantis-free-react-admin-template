import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { utils, write } from 'xlsx';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

const Excel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const exportToExcel = () => {
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });

    // Create a new ZIP file and add the Excel file to it
    const zip = new JSZip();
    zip.file('data.xlsx', excelBuffer, { binary: true });

    // Generate the ZIP file and trigger the download
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'data.zip');
    });
  };

  const showExcel = () => {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    if (newWindow) {
      const htmlContent = `
        <html>
          <head>
            <title>Data</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid black; padding: 8px; text-align: left; }
              th { background-color: #f2f2f2; }
            </style>
          </head>
          <body>
            <h1>Data from API</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                ${data
                  .map(
                    (item) => `
                  <tr key="${item.id}">
                    <td>${item.id}</td>
                    <td>${item.userId}</td>
                    <td>${item.title}</td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
          </body>
        </html>
      `;
      newWindow.document.write(htmlContent);
      newWindow.document.close();
    }
  };

  return (
    <div>
      <h1>Data from API</h1>
      <button onClick={exportToExcel}>Export to Excel</button>
      <button onClick={showExcel}>Show Data</button>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Excel;
