function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    checkedValue:document.getElementById("checkedValue").value,
    checkedValue1:document.getElementById("checkedValue1").value,
    checkedValue2:document.getElementById("checkedValue2").value,
    // slum1:document.getElementById("slum1").value,
  };

  const serviceID = "service_as14706";
  const templateID = "template_voryzbc";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("checkedValue").value,
        document.getElementById("checkedValue1").value,
        document.getElementById("checkedValue2").value,
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

  const serviceID1 = "service_fy4vt0a";
  const templateID1 = "template_927nkin";
    emailjs.send(serviceID1, templateID1, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("checkedValue").value,
        document.getElementById("checkedValue1").value,
        document.getElementById("checkedValue2").value,
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

    const serviceID2 = "service_a6jjsll";
  const templateID2 = "template_gigpzow";
    emailjs.send(serviceID2, templateID2, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("checkedValue").value,
        document.getElementById("checkedValue1").value,
        document.getElementById("checkedValue2").value,
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
  const serviceID3 = "service_c6a5b8p";
  const templateID3 = "template_4ikrl44";
    emailjs.send(serviceID3, templateID3, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("checkedValue").value,
        document.getElementById("checkedValue1").value,
        document.getElementById("checkedValue2").value,
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
}

