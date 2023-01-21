export const numberWithCommas = (x: string) => {
  const xx = parseFloat(x).toFixed(3);
  return xx.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function randomString(length: number, chars: string) {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
export const getRandomString = (length = 20) => {
  return randomString(
    length,
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
};
