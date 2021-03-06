// функция сортировки принимает 2 параметра:
// 1). индекс заголовка таблицы
// 2). таблица

// создаём массив из строк таблицы
// сортруем по тексту (в алфавитном порядке), содержащемуся в ячейке
// далее вставляем отсортированные ячейки в таблицу

export default function sortFunction(index, table) {
  const sortedRows = Array.from(table.rows).sort((cellA, cellB) =>
    cellA.cells[index].innerHTML > cellB.cells[index].innerHTML ? 1 : -1
  );

  table.append(...sortedRows);
}
