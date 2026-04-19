const t = '[""hello"]';
try {
  JSON.parse(t);
} catch(e) {
  console.log(e.message);
}
