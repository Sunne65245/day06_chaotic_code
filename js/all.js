// TODO: 修正 ESLint 錯誤、補上分號、改單引號
const url = 'https://hexschool.github.io/js-filter-data/data.json';
let data;
const table = document.querySelector('.table-content');
let showData = [];
let category = '';
const filter = document.querySelector('.filter');

// TODO: 改成 ES6 的 Template Literals (字面字串符)
// TODO: 之後拆成 renderData 函式
function renderData(item) {
  let str = '';
  item.forEach((b) => {
    const content = `
    <tr>
    <td>${b.作物名稱}<td>
    <td>${b.市場名稱}<td>
    <td>${b.上價}<td>
    <td>${b.中價}<td>
    <td>${b.下價}<td>
    <td>${b.平均價}<td>
    <td>${b.交易量}<td>
    <tr>`;
    str += content;
    table.innerHTML = str;
  });
}

axios.get(url).then((res) => {
  data = res.data.filter((a) => a.作物名稱);
  renderData(data); // 預設載入顯示
});

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => i.種類代碼 === category);
    renderData(showData);
  }
}
filter.addEventListener('click', filterCategory); // 點擊切換v2
