export default function ArrayMethodsPage() {
  let array1 = [1, 2, 3, 4, 5];
  array1.push(6);
  let lastNum = array1.pop();
  {
    /**start number and end numbert */
  }
  array1.splice(2, 2);
  // non mutating methods
  let numbers = [5, , 3, 9, 1, 4];
  let doubled = numbers.map((number) => number * 2);
  let lessThanFive = numbers.filter((number) => number < 5);
  let concatNumbers = numbers.concat(doubled);
  let allNumbers = [...numbers, 12, 16, ...doubled];

  //sort
  const sortingLogic = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  //let sortedNumbers = allNumbers.sort(sortingLogic);
  let sortedNumbers = [...allNumbers];
  sortedNumbers.sort(sortingLogic);
  // spread operator
  let originalObject = { a: 1, b: 2 };
  let otherObject = { c: 3, d: 4 };
  let newObject = { ...originalObject, ...otherObject };
  //console.log(newObject);

  let referenceObject = originalObject;
  let defensivCopy = { ...originalObject };

  referenceObject.a = 5;
  defensivCopy.b = 10;

  return (
    <main>
      <h1>Array Methods</h1>
      <p>{array1.join()}</p>
      {/**default is comma, i can add other join("|") */}
      <p>{lastNum}</p>
      <p>{numbers.join()}</p>
      <p>{doubled.join()}</p>
      <p>{lessThanFive.join()}</p>
      <p>{concatNumbers.join()}</p>
      <p>{allNumbers.join()}</p>
      <p>{sortedNumbers.join()}</p>
    </main>
  );
}
