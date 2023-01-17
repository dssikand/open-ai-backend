function makeid(length: any) {
  let result = Math.floor(100000 + Math.random() * 900000);
  return result;
}

export { makeid };
