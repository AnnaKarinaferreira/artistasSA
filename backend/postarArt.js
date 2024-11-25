import { useState } from 'react';


function encodeToBase64(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log(reader.result)
      document.getElementById("file").src = reader.result
    }
    reader.readAsDataURL(file);
  }