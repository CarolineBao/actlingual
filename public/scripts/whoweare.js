$(document).ready(function() {
  // Points modal logic
  let execModal = document.getElementById('exec-modal');
  let modalDescription = $(".modal-description");
  let modalTitle = $(".modal-title");
  let modalLinks = document.getElementsByClassName('profilephoto');
  console.log(modalLinks);
  let modalX = document.getElementById('modal-close');

  // When the user clicks on the button, open the modal and update text
  for (let mLink of modalLinks) {
    try {
      throw mLink;
    }
    catch(modalLink) {
      let key = $(modalLink).attr('id');
      modalLink.onclick = function() {
        execModal.style.display = 'block';
        $(modalTitle).text(nameMap[$(modalLink).attr('id')]);
        $(modalDescription).text(descriptionMap[$(modalLink).attr('id')]);
      }
    }
  }

  // Close the modal with the X button
  modalX.onclick = function() {
    execModal.style.display = 'none';
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == execModal) {
      execModal.style.display = 'none';
    }
  }

  // Exec profile descriptions

  let descriptionMap = {
    "omar": "",
    "tam": "",
    "caroline": "",
    "silvia": "",
    "wenbo": "",
    "sky": "",
    "tina": "",
    "lulu": "",
    "victor": "",
    "bhav": "",
    "mydia": ""
  };

  let nameMap = {
    "omar": "Omar Santiago Reyes",
    "tam": "Tam Nguyen",
    "caroline": "Caroline Bao",
    "silvia": "Silvia Cao",
    "wenbo": "Wenbo Wu",
    "sky": "Sky Kim",
    "tina": "Tina Chen",
    "lulu": "Lulu Tian",
    "victor": "Victor Damptey",
    "bhav": "Bhav Jain",
    "mydia": "Mydia Phan"
  };
});
