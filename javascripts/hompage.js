function openNav() {
  let a = document.getElementById("mySidenav");
  if (a.style.width == "250px") {
    a.style.width = "0";
  } else {
    a.style.width= "250px";
  }
}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      previewRow.innerHTML = previewRow.innerHTML + `
            <div class="col s4">
              <img width="100%" class="materialboxed" src=${e.target.result}>
            </div>
            `
    }

    reader.readAsDataURL(input.files[0]);

    document.getElementById('uploadTips').style.display = 'none';
  }
}