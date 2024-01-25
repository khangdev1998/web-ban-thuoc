// Slider banner
$(".banner .owl-carousel").owlCarousel({
  margin: 10,
  nav: false,
  smartSpeed: 680,
  autoplaySpeed: 680,
  autoplayTimeout: 4500,
  autoplay: true,
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    1000: {
      items: 1,
    },
  },
  dots: false,
});

$(".banner .custom-prev-btn").click(function () {
  $(".banner .owl-carousel").trigger("prev.owl.carousel");
});

$(".banner .custom-next-btn").click(function () {
  $(".banner .owl-carousel").trigger("next.owl.carousel");
});

$(".brand .owl-carousel").owlCarousel({
  margin: 30,
  nav: false,
  smartSpeed: 680,
  autoplaySpeed: 680,
  autoplayTimeout: 4500,
  autoplay: true,
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    1000: {
      items: 8,
    },
  },
  dots: false,
});

// Slider sản phẩm
$(".productSlider .owl-carousel").owlCarousel({
  margin: 0,
  nav: false,
  smartSpeed: 680,
  autoplaySpeed: 680,
  autoplayTimeout: 4500,
  autoplay: true,
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    1000: {
      items: 5,
    },
  },
  dots: false,
});

$(".productSlider .custom-prev-btn").click(function () {
  $(".productSlider .owl-carousel").trigger("prev.owl.carousel");
});

$(".productSlider .custom-next-btn").click(function () {
  $(".productSlider .owl-carousel").trigger("next.owl.carousel");
});

// Tăng số lượng sản phẩm
function changeQuantity(change) {
  var quantityInput = document.querySelector(".quantity-input");
  var currentQuantity = parseInt(quantityInput.value);
  currentQuantity += change;
  // You can add conditions to limit the min and max quantity.
  if (currentQuantity < 1) currentQuantity = 1;
  quantityInput.value = currentQuantity;
}

// kiểm tra lỗi form trang liên hệ với chúng tôi
$(".contact-form .button").click(function (event) {
  var name = $(".contact-form input[type='text']").val();
  var phone = $(".contact-form input[type='number']").val();
  var content = $(".contact-form textarea").val();

  var errorMessage = "";
  var validationFailed = false;

  // Kiểm tra họ và tên
  if (name.length === 0) {
    errorMessage += "Vui lòng nhập họ và tên\n";
    validationFailed = true;
  }

  // Kiểm tra số điện thoại
  if (phone.length === 0) {
    errorMessage += "Vui lòng nhập số điện thoại\n";
    validationFailed = true;
  }

  // Kiểm tra nội dung
  if (content.length === 0) {
    errorMessage += "Vui lòng nhập nội dung\n";
    validationFailed = true;
  }

  // Hiển thị thông báo lỗi nếu có
  if (validationFailed) {
    alert(errorMessage);
  } else {
    alert("Liên hệ thành công!");
    $(this).prop("disabled", true); // Vô hiệu hóa nút sau khi thông báo
  }
});

// kiểm tra lỗi form trang Đăng nhập và Đăng ký
// Đăng nhập
$(".member-login .member-form").submit(function (event) {
  var account = $("#account").val();
  var password = $("#pass").val();

  // Kiểm tra tài khoản/email
  if (
    account.length === 0 ||
    (account.includes("@") && !account.match(/^[^@]+@\w+(\.\w+)+\w$/))
  ) {
    alert("Tên tài khoản hoặc địa chỉ email không hợp lệ");
    event.preventDefault();
    return false;
  }

  // Kiểm tra mật khẩu
  if (password.length === 0) {
    alert("Mật khẩu không được để trống");
    event.preventDefault();
    return false;
  }

  // Thông báo thành công cho form đăng nhập
  alert("Đăng nhập thành công!");
});

// Đăng ký
$(".member-register .member-form").submit(function (event) {
  var email = $("#email").val();

  // Kiểm tra email
  if (email.length === 0 || !email.match(/^[^@]+@\w+(\.\w+)+\w$/)) {
    alert("Địa chỉ email không hợp lệ");
    event.preventDefault();
    return false;
  }

  // Thông báo thành công cho form đăng ký
  alert("Đăng ký thành công! Mật khẩu sẽ được gửi đến email của bạn.");
});

// kiểm tra lỗi form trang Yêu cầu đặt hàng
$(".order-left .button").click(function (event) {
  var name = $(".order-form input[type='text']").first().val();
  var email = $(".order-form input[type='email']").val();
  var phone = $(".order-form .number").val();
  var address = $(".order-form input[type='text']").last().val();
  var city = $(".order-form select").eq(0).val();
  var district = $(".order-form select").eq(1).val();
  var ward = $(".order-form select").eq(2).val();
  var note = $(".order-form textarea").val();

  var errorMessage = "";
  var validationFailed = false;

  // Kiểm tra họ và tên
  if (name.length === 0) {
    errorMessage += "Vui lòng nhập họ và tên.\n";
    validationFailed = true;
  }

  // Kiểm tra email
  if (email.length === 0 || !email.match(/^[^@]+@\w+(\.\w+)+\w$/)) {
    errorMessage += "Email không hợp lệ.\n";
    validationFailed = true;
  }

  // Kiểm tra số điện thoại
  if (phone.length === 0) {
    errorMessage += "Vui lòng nhập số điện thoại.\n";
    validationFailed = true;
  }

  // Kiểm tra địa chỉ
  if (address.length === 0) {
    errorMessage += "Vui lòng nhập địa chỉ.\n";
    validationFailed = true;
  }

  // Kiểm tra lựa chọn Tỉnh/Thành phố, Quận/Huyện, Phường/Xã
  if (city === "" || district === "" || ward === "") {
    errorMessage += "Vui lòng chọn Tỉnh/Thành phố, Quận/Huyện, và Phường/Xã.\n";
    validationFailed = true;
  }

  // Kiểm tra ghi chú
  if (note.length === 0) {
    errorMessage += "Vui lòng nhập ghi chú.\n";
    validationFailed = true;
  }

  // Hiển thị thông báo lỗi nếu có
  if (validationFailed) {
    alert(errorMessage);
  } else {
    alert("Đã đặt hàng thành công!");
  }
});