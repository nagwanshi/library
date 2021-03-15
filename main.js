import Book from './boo.js';


(function(){
    //Adding card Elements
        const parentNode = document.querySelector(".mainContainer");
        const newBookButton = document.querySelector("button#nb");

        
        //values from form
        const titleInput = document.querySelector('input[name="title"]');
        const authInput = document.querySelector('input[name="author"]');
        const pageInput = document.querySelector('input[name="pages"]');
        const readStatus = document.querySelector('input[name="read"]');
        const submitButton = document.querySelector("#formSubmit");
        const cancel = document.querySelector("#cancel");
        const overlay = document.querySelector(".overlay");
        const formDiv = document.querySelector("#form");
        const books =[]
               
        
        
        //Functions
        const renderData = (books) =>{
                
             parentNode.innerHTML ="";
            books.forEach((book, index) => {
                const card = document.createElement("div");
                const cardHeader = document.createElement("header");
                const delButton = document.createElement("button");
                const cardBody = document.createElement("div");


                // Card Header
                delButton.innerHTML = 'Delete';
                delButton.id = index;
                delButton.addEventListener('click',()=>{
                    books.splice(index,1);
                    renderData(books);

                });

                cardHeader.innerHTML = `
                <div class="title">
                <h3>${book.title}</h3>
                </div>`




                //Card Body

                const cardMain = document.createElement('main');
                const readInfo =  document.createElement("div");
                
                readInfo.innerHTML = `<div class="read info">
                <h3>Status</h3>
                 </div> `

                const statusDiv = document.createElement("div");
                const checkBox = document.createElement("input");
                const checkLabel = document.createElement("label");

                checkLabel.setAttribute("for","status");
                checkBox.id = "status";
                checkBox.type = "checkbox";
                statusDiv.className = "status";


                if (readStatus.checked === true){
                    checkBox.setAttribute("checked",true);
                    checkLabel.innerText = 'read';
                }
                else{
                    checkLabel.innerText = 'not Read yet';
                }


                checkBox.addEventListener('click',()=>{
                    if (checkBox.checked === false){
                        checkLabel.innerText = 'not read yet';
                    }
                    else{
                        checkLabel.innerText = 'read';
                    }
                })

                statusDiv.appendChild(checkBox);
                statusDiv.appendChild(checkLabel);
                readInfo.appendChild(statusDiv);


            const cardContent =`<div class="auth info">
                <h3>Author</h3>
                <p>${book.author}</p>
            </div>
           <div class="no info">
            <h3>No. Of Pages</h3>
            <p>${book.pages}</p>
           </div>`
                

           cardMain.innerHTML = cardContent;
           cardMain.appendChild(readInfo);


            
                cardBody.appendChild(cardMain);
                card.appendChild(cardHeader);
                card.append(delButton);
                card.appendChild(cardBody);
                card.className = "card"; 
                parentNode.appendChild(card);
            });
        }

        const createBooks = ()=>{
            let title = titleInput.value;
            let author = authInput.value;
            let pages = pageInput.value;
            let status = readStatus.checked;
            if ( readStatus.checked == true){

            }

            
            
            
        const newBook = new Book(title, author, pages, status);
        books.push(newBook);
        
        renderData(books);
        

        }

        const updateStatus = ()=>{
            if (readStatus.checked){

            }
        }
        

        
        const overlayOn = () =>{
            titleInput.value = '';
            pageInput.value ='';
            authInput.value ='';
            readStatus.value = false;
            overlay.style.display = "block";

        }

        const overlayOff = () =>{
            overlay.style.display = "none";
        }



        const validate = () =>{
            let validated = (titleInput.value !== '')&& (authInput.value !== '') && (pageInput.value !== '');
            if (validated){
                createBooks();
                overlayOff();
            }
            
            
           
        }


       
        
renderData(books);
newBookButton.addEventListener("click",overlayOn);

submitButton.addEventListener('click',validate);
cancel.addEventListener('click',overlayOff);




})();