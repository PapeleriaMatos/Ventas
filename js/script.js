// Ejemplo de inventario
let inventory = [
    { id: 1, name: 'Cuaderno', price: 10, image: 'img/inventario/cuaderno.jpg' },
    { id: 2, name: 'Lápiz', price: 5, image: 'img/inventario/lapiz.jpg' },
    { id: 3, name: 'Bolígrafo', price: 7, image: 'img/inventario/boligrafo.jpg' },
    { id: 4, name: 'Goma de borrar', price: 3, image: 'img/inventario/goma_borrar.jpg' }
  ];
  
  // Variable para almacenar los productos añadidos a la venta
  let saleItems = [];
  
  // Cargar ventas guardadas de localStorage o inicializar un array vacío
  let sales = JSON.parse(localStorage.getItem('sales')) || [];
  
  // Función para cargar el inventario en la página
  function loadInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    inventory.forEach(product => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="inventario">
          <div class="container-img">
            <img src="${product.image}" alt="${product.name}" width="100">
          </div>
          <div class="container-article">
            <p>${product.name}</p>
            <p>Precio: $${product.price}</p>
          </div>
        </div>
      `;
      inventoryList.appendChild(listItem);
  
      // Llenar select del punto de venta
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      document.getElementById('product').appendChild(option);
    });
  }
  
  // Función para agregar un producto a la venta
  function addProduct() {
    const productId = parseInt(document.getElementById('product').value);
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const product = inventory.find(item => item.id === productId);
  
    if (!product) {
      alert('Producto no encontrado');
      return;
    }
  
  
    const saleItem = { id: product.id, name: product.name, price: product.price, quantity: quantity };
    saleItems.push(saleItem);
  
    updateSaleItems();
  }
  
  // Función para mostrar los productos añadidos a la venta
  function updateSaleItems() {
    const saleItemsDiv = document.getElementById('sale-items');
    saleItemsDiv.innerHTML = '';
  
    saleItems.forEach((item, index) => {
      const saleItemDiv = document.createElement('div');
      saleItemDiv.textContent = `${item.name} - Precio: $${item.price} - ${item.quantity} piezas`;
      
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
      deleteButton.onclick = function() {
        deleteItem(index);
      };
  
      saleItemDiv.appendChild(deleteButton);
      saleItemsDiv.appendChild(saleItemDiv);
    });
  }
  
  // Función para borrar un producto de la venta
  function deleteItem(index) {
    saleItems.splice(index, 1);
    updateSaleItems();
  }
  
  // Función para calcular el total de la venta
  function calculateTotal() {
    let total = 0;
    saleItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }
  
  // Función para procesar la venta
  function sellProducts(event) {
    event.preventDefault();
  
    saleItems.forEach(item => {
      const product = inventory.find(p => p.id === item.id);
      product.quantity -= item.quantity;
    });
  
    const total = calculateTotal();
    alert(`Venta realizada correctamente\nTotal: $${total}`);
    
    // Guardar la venta en localStorage
    sales.push({ items: saleItems, total: total });
    localStorage.setItem('sales', JSON.stringify(sales));
  
    saleItems = [];
    updateSaleItems();
    loadInventory();
  }
  
  // Cargar inventario al cargar la página
  window.onload = function() {
    loadInventory();
    document.getElementById('sale-form').addEventListener('submit', sellProducts);
  };
  