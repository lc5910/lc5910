// 四舍五入-保留两位小数-千分位表示
export function formatMoneyFilter(value) {
  if (value === undefined || value === null || value === "") {
    return "";
  }
  var parts;
  if (~value.toString().indexOf(".")) {
    parts = Number(value).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split('.');
    parts = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '.' + parts[1];
  } else {
    parts = Math.round(value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return parts;
}

// 四舍五入-取整-千分位表示
export function formatRoundInt(value) {
  if (value === undefined || value === null || value === "") {
    return "";
  }
  return Math.round(value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}