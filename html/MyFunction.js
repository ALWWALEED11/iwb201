

$(document).ready(function() {
  $("#myCheckbox").change(function() {
    if ($(this).is(":checked")) {
      $("#additionalInfo").show();
    } else {
      $("#additionalInfo").hide();
    }
  });
});

$(document).ready(function() {
    $("#myCheckbox1").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo1").show();
      } else {
        $("#additionalInfo1").hide();
      }
    });
  });

  $(document).ready(function() {
    $("#myCheckbox2").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo2").show();
      } else {
        $("#additionalInfo2").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox3").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo3").show();
      } else {
        $("#additionalInfo3").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox4").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo4").show();
      } else {
        $("#additionalInfo4").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox5").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo5").show();
      } else {
        $("#additionalInfo5").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox6").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo6").show();
      } else {
        $("#additionalInfo6").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox7").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo7").show();
      } else {
        $("#additionalInfo7").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox8").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo8").show();
      } else {
        $("#additionalInfo8").hide();
      }
    });
  });

  function refreshCaptcha() {
    var newCaptcha = generateCaptcha();
     document.getElementById("captcha").innerText = newCaptcha ;
}
function generateCaptcha() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var captcha = "";

    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

document.addEventListener("DOMContentLoaded", function() {
   refreshCaptcha();
});


$('#btn3').click(function(){
 window.alert('تم الحجز بنجاح')
})

function toggleDetails(checkbox, detailsId) {
  var details = document.getElementById(detailsId);
  if (checkbox.checked) {
      details.style.display = 'table-row';
  } else {
      details.style.display = 'none';
  }
}
function showForm() {
  var selectedOption = document.querySelector('input[name="options"]:checked');
  if (selectedOption) {
      document.getElementById('form-container').style.display = 'block';
  } else {
      alert('يرجى اختيار عقار.');
  }
}

var captchaCode;

  function generateCaptcha() {
      captchaCode = Math.floor(1000 + Math.random() * 9000).toString();
      document.getElementById('captchaCode').innerText = captchaCode;
  }

function validateForm() {
  var nationalId = document.getElementById('nationalId').value;
  var name = document.getElementById('name').value;
  var birthDate = document.getElementById('birthDate').value;
  var mobile = document.getElementById('mobile').value;
  var email = document.getElementById('email').value;
  var captchInput = document.getElementById('captcha').value;

  

  var nationalIdPattern = /^(0[1-9]|1[0-4])\d{9}$/;
  var namePattern = /^[\u0621-\u064A\s]+$/;
  var datePattern = /^\d{2}-\d{2}-\d{4}$/;
  var mobilePattern = /^(09(3|4|5|6|8|9)\d{7})$/;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!nationalIdPattern.test(nationalId)) {
      alert('يرجى إدخال رقم وطني صحيح.');
      return false;
  }

  if (name && !namePattern.test(name)) {
      alert('يرجى إدخال اسم صحيح باللغة العربية.');
      return false;
  }

  if (birthDate && !datePattern.test(birthDate)) {
      alert('يرجى إدخال تاريخ ميلاد صحيح بالشكل 00-00-0000.');
      return false;
  }

  if (mobile && !mobilePattern.test(mobile)) {
      alert('يرجى إدخال رقم الجوال صحيح.');
      return false;
  }

  if (email && !emailPattern.test(email)) {
      alert('يرجى إدخال بريد إلكتروني صحيح.');
      return false;
  }

  if (captchInput !== captchaCode) {
      alert('رمز Captcha غير صحيح. اعد المحاولة ');
      return false;
  }

  alert('تم تقديم الطلب بنجاح.');
  return true; }    


window.onload = generateCaptcha;
