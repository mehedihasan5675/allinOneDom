const sectionOne = document.getElementById('sectionOne');
sectionOne.style.backgroundColor='skyblue';
sectionOne.style.padding='30px';
sectionOne.style.borderRadius='30px';
sectionOne.style.width='80%';
sectionOne.style.margin='0 auto';
// sectionOne.style.display='flex';
// sectionOne.style.flexDirection='column';


const demoOne = document.querySelector('.demoOne');
const newChildOfDemo = document.createElement('p');
newChildOfDemo.innerHTML='I am study at Honours 2nd year.';
demoOne.appendChild(newChildOfDemo);
//from two module
//update program of button
const buttonUpdate = document.getElementById('btn_update');
buttonUpdate.addEventListener('click',function(){
    const inputField = document.getElementById('input_text');
    const inputText = inputField.value;
    const changedescripOnePara = document.querySelector('.descripOne');
    
    if(inputText == ''){
        changedescripOnePara.innerHTML = `<p style="color:#d10000">Please Don't provide a empty value.</p>`;
        
    }else{
        changedescripOnePara.innerText = inputText;
        inputField.value = '';
        
    }
    
})










//Post create start
document.getElementById('btn_post').addEventListener('click',function(){
    const textField = document.getElementById('text_input');
  const  input_Text = textField.value;
//   console.log(input_Text);
const allCommentDemo = document.getElementById('demoTwo');
const createNewPostParagrap =document.createElement('p');
createNewPostParagrap.innerText = input_Text;

allCommentDemo.append(createNewPostParagrap);
// console.log(allCommentDemo.appendChild(createNewPostParagrap));

// console.log(createNewPostParagrap);
textField.value = '';

  
})










// delete text as github
const deleteInput = document.getElementById('delete_input');
deleteInput.addEventListener('keyup',function(/*event*/){
  const inputField = document.getElementById('delete_input');
  const inputText =  inputField.value;
// const inputText = event.target.value;
  if(inputText === 'delete'){
    document.getElementById('btn_delete').removeAttribute('disabled')
  }else{
    document.getElementById('btn_delete').setAttribute('disabled',true)
  }
  const deleteButton = document.getElementById('btn_delete');
  deleteButton.addEventListener('click',function(){
    document.getElementById('para_Delete').style.display ='none';
  inputField.value ='';

  })
    
})













// create item and delete 
// const items = document.getElementsByClassName('item');
// // for(const item of items){
// //     item.addEventListener('click',function(event){
// //         // console.log(item.innerText);
// //         event.target.parentNode.removeChild(event.target)
        
// //     })

// // }
const list_container =document.getElementById('list_container');
list_container.addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target)
})


const addItemButton = document.getElementById('add_item_btn');
addItemButton.addEventListener('click',function(){
    const listContainer = document.getElementById('list_container');
    const createLi =document.createElement('li');
    createLi.innerText='Brand New item of list Container';
    listContainer.appendChild(createLi)
})







