const formEl=document.createElement("form");
const labelEl=document.createElement("label");
const nameInput=document.createElement("input");
const btnEl=document.createElement("button");
const labelEl2=document.createElement("label");
const ageInput=document.createElement("input");
const error1=document.createElement("label");
const error2=document.createElement("label");
const success=document.createElement("label");
const mylabel=document.createElement("label");
const bodyEl=document.body;


labelEl.textContent="insert your name please: ";

nameInput.type=Text;
nameInput.style.height="30px";
nameInput.style.width="50vw";
nameInput.placeholder="inser a name please";
nameInput.style.display="block";


formEl.style.border="1px solid black";
formEl.style.padding="15px";

labelEl2.textContent="insert your age please: ";

ageInput.type="number";
ageInput.style.height="30px";
ageInput.style.width="50vw";
ageInput.style.display="block";
ageInput.placeholder="inser a name please";

btnEl.textContent="click on me!";
btnEl.style.height="30px";
btnEl.style.width="51vw";


success.style.color="green";
mylabel.innerHTML="every things that you see , that created in js only. <br>"
bodyEl.append(mylabel);

formEl.append(labelEl);
formEl.append(nameInput);
formEl.append(error1);
formEl.append(labelEl2);
formEl.append(ageInput);
formEl.append(error2);
formEl.append(btnEl);
formEl.append(success);

bodyEl.style.padding= "30px";
bodyEl.style.backgroundColor="gray";
bodyEl.append(formEl);

btnEl.addEventListener("click",function(event){
   if(nameInput.value==="" ){
    event.preventDefault();
    error1.innerHTML="please insert your name...</br>";
    error1.style.color="red";
  }
  if(ageInput.value==="" || ageInput.value<18 || ageInput.value>100 ){
    event.preventDefault();
    error2.innerHTML="please insert your age number beteen 18 and 100</br>";
    error2.style.color="red";
  }
  else if(ageInput.value !="" && nameInput.value !="" && ageInput.value >= 18 && ageInput.value< 101) {
    event.preventDefault();
    error1.innerHTML="";
    error2.innerHTML="";
    success.innerHTML="<br> your data are subitted..."
  }
});