// JavaScript Task – product name swap & alert

function pickProduct(attribute, value) {
  const allElements = document.getElementsByTagName('*');

  for (let i = 0; i < allElements.length; i += 1) {
    if (Number(allElements[i].getAttribute(attribute)) === value) {
      return allElements[i];
    }
  }
  // nothing found
  return null;
}


function selectProductName(product) {
  return product.children[0].innerHTML;
}

function selectProductPrice(product) {
  return product.children[1].innerHTML;
}

function setProductName(product, newName) {
  product.children[0].innerHTML = newName;
}

let counter = 2;
const productNumber2 = pickProduct('data-identifier', 2);
const productNumber3 = pickProduct('data-identifier', 3);

const product2Name = selectProductName(productNumber2);
const product3Name = selectProductName(productNumber3);

function productNameClick(e) {
  const productData = e.target.parentElement;
  const productIdentifier = productData.getAttribute('data-identifier');

  if (Number(productIdentifier) === 3) {
    if (counter % 2 === 0) {
      setProductName(productNumber3, product2Name);
      setProductName(productNumber2, product3Name);
      counter += 1;
    } else {
      setProductName(productNumber3, product3Name);
      setProductName(productNumber2, product2Name);
      counter += 1;
    }
  } else {
    alert(
      `      Product name: ${selectProductName(productData)}
      Product identifier: ${productIdentifier}
      Price: ${selectProductPrice(productData)}`
    );
  }
}

const productNameCollection = document.getElementsByClassName('product-name');

for (let i = 0; i < productNameCollection.length; i += 1) {
  productNameCollection[i].addEventListener('click', productNameClick);
}
