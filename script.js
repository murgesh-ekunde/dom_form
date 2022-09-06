//creating form element
let form = document.createElement('form');
form.setAttribute('id','survey-form');
form.setAttribute('name','survey-form');
form.classList.add("survey-form")
document.body.appendChild(form);

//creating h1 title element
var br=document.createElement('br')
let h1=document.createElement('h1')
h1.setAttribute('id','title')
h1.innerText="DOM Manipulation with Forms"
document.body.appendChild(form).appendChild(h1)


//description
let info=document.createElement('p')
info.setAttribute('id','description')
info.innerText="Welcome to Food Survey. Please fill the below form and select your food"
document.body.appendChild(form).appendChild(info)

// Creating element for first name
let divTop=document.createElement('div')		//div element
divTop.classList.add("form-group")

let name_label=document.createElement("label")		//label element
name_label.innerText="First Name"
name_label.classList.add('form-label','my-1')

let name_input=document.createElement("input")		//input element for first name
name_input.classList.add('form-control')
name_input.setAttribute('id','first-name')
name_input.setAttribute('type','text')
name_input.setAttribute('placeholder','First name')
name_input.setAttribute('required','')
document.body.appendChild(form).appendChild(divTop).appendChild(name_label)
document.body.appendChild(form).appendChild(divTop).appendChild(name_input)

// Creating element for last name
let last_name=document.createElement("label") 
last_name.innerText="Last Name"
last_name.classList.add('form-label','my-1')

let lastName_input=document.createElement("input")
lastName_input.setAttribute('placeholder','Last name')
lastName_input.setAttribute("required",'')
lastName_input.setAttribute('id','last-name')
lastName_input.classList.add('form-control')
lastName_input.appendChild(br)
document.body.appendChild(form).appendChild(divTop).appendChild(last_name)
document.body.appendChild(form).appendChild(divTop).appendChild(lastName_input)

// Creating element for email
let email_label=document.createElement("label") 
email_label.innerText="Email"
email_label.classList.add('form-label','my-1')

let email_input=document.createElement("input")
email_input.setAttribute('type','email')
email_input.setAttribute('placeholder','Email')
email_input.setAttribute("required",'')
email_input.setAttribute('id','email')
email_input.classList.add('form-control')
email_input.appendChild(br)
document.body.appendChild(form).appendChild(divTop).appendChild(email_label)
document.body.appendChild(form).appendChild(divTop).appendChild(email_input)

//Element for additional comments
let comment=document.createElement("label") 
comment.innerText="Additional Comment"
comment.classList.add('form-label','my-1')

let comment_input=document.createElement("textarea")
comment_input.setAttribute('placeholder','Additional Comments')
comment_input.setAttribute('id',"comments")
comment_input.setAttribute('required','')
comment_input.classList.add('form-conttrol')
document.body.appendChild(form).appendChild(divTop).appendChild(comment)
document.body.appendChild(form).appendChild(divTop).appendChild(comment_input)

//Creating element for adress
let adress=document.createElement("label") 
adress.innerText="Address"
adress.classList.add('form-label','my-1')
let address_input=document.createElement("textarea")
address_input.setAttribute('placeholder','Address')
address_input.setAttribute('id',"address")
address_input.setAttribute('required','')
address_input.classList.add('form-conttrol')
document.body.appendChild(form).appendChild(divTop).appendChild(adress)
document.body.appendChild(form).appendChild(divTop).appendChild(address_input)

//Creating element for Pin
let PN=document.createElement('div')
PN.classList.add('form-group')
let pin_title=document.createElement("label") ; 
pin_title.innerText="Pincode"
pin_title.classList.add('form-label','my-1')
let pin=document.createElement("input")
pin.setAttribute('placeholder','Pincode')
pin.setAttribute('type','text')
pin.setAttribute('id','pincode')
pin.setAttribute('required','')
pin.classList.add('form-control')
document.body.appendChild(form).appendChild(PN).appendChild(pin_title)
document.body.appendChild(form).appendChild(PN).appendChild(pin)

//Creating element for gender
let gen_title=document.createElement("label") 
gen_title.innerText="Gender"
gen_title.classList.add('form-label','my-1') 

//male gender
let gender=document.createElement('input')
gender.classList.add("gen")
gender.setAttribute('type','radio')
gender.setAttribute('name','gender')
gender.setAttribute('id','gen1')
gender.setAttribute('value','male')
gender.setAttribute('required','')

//female gender
let gender1=document.createElement('input')
gender1.classList.add("gen")
gender1.setAttribute('type','radio')
gender1.setAttribute('name','gender')
gender1.setAttribute('value','female')
gender1.setAttribute('id','gen2')
document.body.appendChild(form).appendChild(gen_title);
let g1=document.body.appendChild(form).appendChild(gender)
let gn1=document.createElement('div')
document.body.appendChild(form).appendChild(gn1).appendChild(g1);
gn1.append("Male")
let g2=document.body.appendChild(form).appendChild(gender1)
let gn2=document.createElement('div')
document.body.appendChild(form).appendChild(gn1).appendChild(g2);
gn1.append("Female")

// choice of food(must choose at least 2 out of 5 options),
let choice_title=document.createElement('div')
choice_title.innerText="Choice"
document.body.appendChild(form).appendChild(choice_title)
let choice=document.createElement('div')

let flex=document.createElement('div')
let ch1=document.createElement('input')
let s1=document.createElement('span')
s1.classList.add("p-2")
s1.innerText="Paneer Chilli Fry"
flex.appendChild(ch1)
flex.appendChild(s1)
let b1=document.createElement('br')
flex.appendChild(b1)
ch1.setAttribute('type','checkbox')
ch1.setAttribute('value','Paneer Chilli Fry')
ch1.setAttribute('id','v1')
choice.appendChild(flex)

let ch2=document.createElement('input')
let s2=document.createElement('span')
s2.classList.add("p-2")
s2.innerText="Chicken Masala"
flex.appendChild(ch2)
flex.appendChild(s2)
ch2.setAttribute('type','checkbox')
ch2.setAttribute('value','Chicken Masala')
ch2.setAttribute('id','v2')
choice.appendChild(flex)
let b2=document.createElement('br')
flex.appendChild(b2)

let ch3=document.createElement('input')
let s3=document.createElement('span')
s3.classList.add("p-2")
s3.innerText="Masala Dosa"
flex.appendChild(ch3)
flex.appendChild(s3)
ch3.setAttribute('type','checkbox')
ch3.setAttribute('value','Masala Dosa')
ch3.setAttribute('id','v3')
choice.appendChild(flex)
let b3=document.createElement('br')
flex.appendChild(b3)

let ch4=document.createElement('input')
let s4=document.createElement('span')
s4.classList.add("p-2")
s4.innerText="Uttapam"
flex.appendChild(ch4)
flex.appendChild(s4)
ch4.setAttribute('type','checkbox')
ch4.setAttribute('value','Uttapam')
ch4.setAttribute('id','v4')
choice.appendChild(flex)
let b4=document.createElement('br')
flex.appendChild(b4)

let ch5=document.createElement('input')
let s5=document.createElement('span')
s5.classList.add("p-2")
s5.innerText="Soup"
flex.appendChild(ch5)
flex.appendChild(s5)
ch5.setAttribute('type','checkbox')
ch5.setAttribute('id','v5')
ch5.setAttribute('value','Soup')
choice.appendChild(flex)
document.body.appendChild(form).appendChild(choice)


//creating Element for state
let state_title=document.createElement("label") 
state_title.innerText="State"
state_title.classList.add('form-label','my-1')
let state=document.createElement("input")
state.setAttribute('required','')
state.setAttribute('id','state')
state.classList.add('form-control')
document.body.appendChild(form).appendChild(state_title)
document.body.appendChild(form).appendChild(state)

//creating Element for Country
let coun_title=document.createElement("label") 
coun_title.innerText="Country"
coun_title.classList.add('form-label','my-1')
let coun=document.createElement("input")
coun.setAttribute('required','')
coun.setAttribute('id','coun')
coun.classList.add('form-control')
document.body.appendChild(form).appendChild(coun_title)
document.body.appendChild(form).appendChild(coun)


//Creating submission button
let btn=document.createElement('button');
btn.innerHTML="Submit";
btn.classList.add("btn","btn-primary","my-4")
btn.setAttribute('id','submit')
btn.setAttribute('value','Submit')
document.body.appendChild(form).appendChild(btn)


//Creating reset button
let r_btn=document.createElement('input');
r_btn.innerHTML="Reset";
r_btn.classList.add("btn","btn-warning","my-4","mx-4")
r_btn.setAttribute('type','reset')
document.body.appendChild(form).appendChild(r_btn)

//Creating Table
let table_div = document.createElement('div')
table_div.classList.add("table-responsive","table_ans")
let ans_table=document.createElement('table')
ans_table.classList.add("table","border")
let thead=document.createElement('thead')
let th_row=document.createElement('tr')
let th_row_1 =document.createElement('th')
th_row_1.innerText="First Name"
let th_row_2 =document.createElement('th')
th_row_2.innerText="Last Name"
let th_row_3 =document.createElement('th')
th_row_3.innerText="Address"
let th_row_4 =document.createElement('th')
th_row_4.innerText="Gender"
let th_row_5 =document.createElement('th')
th_row_5.innerText='State'
let th_row_6 =document.createElement('th')
th_row_6.innerText='Foods'
thead.appendChild(th_row_1)
thead.appendChild(th_row_2)
thead.appendChild(th_row_3)
thead.appendChild(th_row_4)
thead.appendChild(th_row_6)
thead.appendChild(th_row_5)
ans_table.appendChild(thead)

let tbody=document.createElement('tbody')
let t_row = document.createElement('tr')
let t_data1= document.createElement('td')
t_data1.setAttribute('id','t1')
let t_data2= document.createElement('td')
t_data2.setAttribute('id','t2')
let t_data3= document.createElement('td')
t_data3.setAttribute('id','t3')
let t_data4= document.createElement('td')
t_data4.setAttribute('id','t4')
let t_data5= document.createElement('td')
t_data5.setAttribute('id','t5')
let t_data6= document.createElement('td')
t_data6.setAttribute('id','t6')
t_row.appendChild(t_data1)
t_row.appendChild(t_data2)
t_row.appendChild(t_data3)
t_row.appendChild(t_data4)
t_row.appendChild(t_data5)
t_row.appendChild(t_data6)

tbody.appendChild(t_row)
ans_table.appendChild(tbody)
document.body.appendChild(form).appendChild(table_div).appendChild(ans_table)


let ans=document.getElementById("submit").addEventListener('click',validate)

function validate(event){
   event.preventDefault();
   let fv=document.getElementById("first-name").value;  
   let lastName_input_v=document.getElementById("last-name").value;  
   let add_v=document.getElementById("address").value;  
   let gender_v1=document.getElementById("gen1");
   let gender_v2=document.getElementById("gen2");  
   

   let ch_v1 = document.getElementById("v1");
   let ch_v2 = document.getElementById("v2");
   let ch_v3 = document.getElementById("v3");
   let ch_v4 = document.getElementById("v4");
   let ch_v5 = document.getElementById("v5");
   let state_v=document.getElementById("state").value;  

   let l=" ";
   if(fv!=""){
      document.getElementById('t1').innerHTML=fv;
   }
   if(lastName_input_v!=""){
      document.getElementById('t2').innerHTML=lastName_input_v;
   }
   if(add_v!=""){
      document.getElementById('t3').innerHTML=add_v;
   }
   if(gender_v1.checked==true){
      document.getElementById('t4').innerHTML="male";
   }
   else if(gender_v2.checked==true){
      document.getElementById('t4').innerHTML="female";
   }
   if(state_v!=""){
      document.querySelector('.table_ans').style.cssText="display:block"
      document.getElementById('t6').innerHTML=state_v;
   }
   if(ch_v1.checked==true){
      let ff=document.getElementById('v1').value;
       l=l+ff+' '
   }
   if(ch_v2.checked==true){
      let ff=document.getElementById('v2').value;
      l=l+ff+' '
   }
   if(ch_v3.checked==true){
      let ff=document.getElementById('v3').value;
      l=l+ff+' '
   }
   if(ch_v4.checked==true){
      let ff=document.getElementById('v4').value;
      l=l+ff+' '
   }
   if(ch_v5.checked==true){
      let ff=document.getElementById('v5').value;
      l=l+ff+' '
   }
   
   document.getElementById('t5').innerHTML=l;
   
   document.survey-form.reset();

}