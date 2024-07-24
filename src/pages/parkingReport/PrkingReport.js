import React, { useState } from 'react';
import axios from 'axios';
import Tabs from './Tabs';
import DateSelector from './DateSelector';
import CarColorSelector from './CarColorSelector';

const App = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState([]);

  const handleSubmit = async () => {
    const requestData = {
     id,
      title,
    };

    try {
      // Send data to the backend using axios
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts/', requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Get the response data
      const data = response.data;

      // Create HTML table content from the response data
      const tableRows = data.map(item => `
        <tr>
          <td>${item.id}</td>
          <td>${item.title.join(', ')}</td>
        </tr>
      `).join('');

      const htmlContent = `
        <html>
          <head><title>Results</title></head>
          <body>
            <table border="1">
              <thead>
                <tr><th>Date</th><th>Car Colors</th></tr>
              </thead>
              <tbody>${tableRows}</tbody>
            </table>
          </body>
        </html>
      `;

      // Open a new tab with the HTML content
      const newTab = window.open();
      newTab.document.write(htmlContent);
      newTab.document.close();
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  const tabs = [
    { name: 'date', label: 'Date Selector', component: <DateSelector onDateChange={setId} /> },
    { name: 'carColors', label: 'Car Color Selector', component: <CarColorSelector onColorsChange={setTitle} /> },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
