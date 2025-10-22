// --- Lấy các phần tử cần dùng ---
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const cancelBtn = document.getElementById('cancelBtn');
const errorMsg = document.getElementById('errorMsg');
const productList = document.getElementById('product-list');

// --- 1. Tìm kiếm sản phẩm ---
searchBtn.addEventListener('click', searchProducts);
searchInput.addEventListener('keyup', searchProducts);

function searchProducts() {
  const keyword = searchInput.value.toLowerCase().trim();
  const products = document.querySelectorAll('.product-item');

  products.forEach(product => {
    const name = product.querySelector('.product-name').textContent.toLowerCase();
    product.style.display = name.includes(keyword) ? '' : 'none';
  });
}

// --- 2. Hiện / ẩn form thêm sản phẩm ---
addProductBtn.addEventListener('click', () => {
  addProductForm.classList.toggle('hidden');
});

cancelBtn.addEventListener('click', () => {
  addProductForm.classList.add('hidden');
  addProductForm.reset();
  errorMsg.textContent = '';
});

// --- 3. Xử lý sự kiện submit form ---
addProductForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Lấy dữ liệu nhập vào
  const name = document.getElementById('newName').value.trim();
  const price = document.getElementById('newPrice').value.trim();
  const desc = document.getElementById('newDesc').value.trim();

  // Kiểm tra hợp lệ
  if (name === '' || price === '' || isNaN(price) || Number(price) <= 0) {
    errorMsg.textContent = '⚠️ Vui lòng nhập tên và giá hợp lệ!';
    return;
  }

  errorMsg.textContent = '';

  // --- Tạo sản phẩm mới ---
  const newItem = document.createElement('article');
  newItem.className = 'product-item';
  newItem.innerHTML = `
    <h3 class="product-name">${name}</h3>
    <p class="product-desc">${desc}</p>
    <p class="product-price">Giá: ${Number(price).toLocaleString()}₫</p>
  `;

  // --- Thêm vào danh sách ---
  productList.prepend(newItem);

  // --- Reset form ---
  addProductForm.reset();
  addProductForm.classList.add('hidden');
});

// --- Sau khi thêm sản phẩm, vẫn có thể tìm kiếm ---
