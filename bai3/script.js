// --- Lấy các phần tử DOM ---
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const products = document.querySelectorAll('.product-item');
const imageInput = document.getElementById('productImage');
const previewImage = document.getElementById('previewImage');

// --- Ẩn form thêm sản phẩm mặc định ---
addProductForm.style.display = "none";

// --- Sự kiện tìm kiếm sản phẩm ---
function searchProducts() {
    const keyword = searchInput.value.toLowerCase().trim();

    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(keyword)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}

// Khi click nút Tìm
searchBtn.addEventListener('click', searchProducts);

// Cho phép tìm khi nhập từ khóa (Enter hoặc gõ liên tục)
searchInput.addEventListener('keyup', searchProducts);

// --- Sự kiện ẩn/hiện form thêm sản phẩm ---
addProductBtn.addEventListener('click', () => {
    if (addProductForm.style.display === "none") {
        addProductForm.style.display = "block";
    } else {
        addProductForm.style.display = "none";
    }
});


//thực hiện tải ảnh lên
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            previewImage.src = event.target.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// --- (Tuỳ chọn) Ngăn form reload trang khi Submit ---
addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thông tin sản phẩm đã được gửi!");
    addProductForm.reset();
});
