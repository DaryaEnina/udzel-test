import React from "react";
import "./style.scss";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ДАТА</th>
          <th>ПАРТНЕР</th>
          <th>БАЛЛЫ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12.01.2023</td>
          <td>ДОМ АНГЕЛА</td>
          <td>-18</td>
        </tr>
        <tr>
          <td>10.01.2023</td>
          <td>Пицца ГОГО</td>
          <td>+8</td>
        </tr>
        <tr>
          <td>09.01.2023</td>
          <td>Пицца ГОГО</td>
          <td>+2</td>
        </tr>
        <tr>
          <td>09.01.2023</td>
          <td>Фонд Шанс</td>
          <td>-9</td>
        </tr>
        <tr>
          <td>08.01.2023</td>
          <td>Суши Суша</td>
          <td>+4</td>
        </tr>
        <tr>
          <td>07.01.2023</td>
          <td>Каршеринг</td>
          <td>+8</td>
        </tr>
        <tr>
          <td>07.01.2023</td>
          <td>Фонд Зверята</td>
          <td>-8</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Table;
