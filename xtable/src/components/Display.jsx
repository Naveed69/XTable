import { useState } from "react";

const Display = () => {
  const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [filterTable, setFilterTable] = useState(tableData);
  const sortByDate = () => {
    const dateData = [...filterTable].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setFilterTable(dateData);
  };
  const sortByViews = () => {
    const viewsData = [...filterTable].sort((a, b) => b.views - a.views);
    setFilterTable(viewsData);
  };
  let i = 1;
  return (
    <>
      <h1>Date and Views Table</h1>
      <button type="button" onClick={sortByDate}>
        Sort by Date
      </button>
      <button type="button" onClick={sortByViews}>
        Sort by Views
      </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {filterTable.map((data) => {
            return (
              <tr key={i++}>
                <td>{data.date}</td>
                <td>{data.views}</td>
                <td>{data.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Display;
