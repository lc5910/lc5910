// 四舍五入-保留两位小数-千分位表示
export function formatRoundFloat(value) {
  if (value === undefined || value === null || value === "") {
    return '-';
  } else if (isNaN(value)) {
    return value;
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
    return '-';
  } else if (isNaN(value)) {
    return value;
  }
  return Math.round(value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// 数字百分比展示
export function numPercentage(value) {
  if (value === undefined || value === null || value === "") {
    return '-';
  } else if (isNaN(value)) {
    return value;
  }
  return (value * 10000 / 100).toFixed(2) + "%";
}