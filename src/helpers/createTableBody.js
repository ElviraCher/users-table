// создаём функцию, которая в цикле будет наполнять тело таблицы
// таблица принимает 4 параметра:
// 1). родитель -  DOM-элемент, в который поместим данные после создания таблицы;
// 2). количество строк;
// 3). количество столбцов
// 4). массив, по которому будем итерироваться

// функции совершается итерация по двум вложенным циклам:
// 1). строки
// 2). ячейки (внутри строк)

// в первом цикле создаются элементы строк,
// во вложенном цикле создаются элементы ячеек

// в зависимости от индекса ячейки присваиваем элементам различные,
// необходимые для стилизации классы
// также, создаём дополнитльные div, где это необходимо для стилизации

export default function createTableBody(parent, rows, cols, arr) {
  for (let rowCounter = 0; rowCounter < rows; rowCounter += 1) {
    const tr = document.createElement("tr");
    tr.classList.add("row");
    for (let colCounter = 0; colCounter < cols; colCounter += 1) {
      const td = document.createElement("td");
      let div;
      switch (colCounter) {
        case 2:
          div = document.createElement("div");
          td.appendChild(div);
          div.classList.add("long-text");
          div.innerHTML = `${arr[rowCounter][colCounter]}`;
          break;
        case 3:
          div = document.createElement("div");
          td.appendChild(div);
          div.classList.add("eye");
          div.classList.add(`eye__${arr[rowCounter][colCounter]}`);
          break;
        default:
          td.innerHTML = `${arr[rowCounter][colCounter]}`;
      }
      td.classList.add("cell");
      tr.appendChild(td);
    }
    parent.appendChild(tr);
  }
}