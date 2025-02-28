document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const addUserBtn = document.getElementById('addUserBtn');
    const closeBtn = document.querySelector('.close-btn');
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');

    addUserBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
            document.querySelector('.modal-content').style.transform = 'translateY(0)';
        }, 10);
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.opacity = '0';
        document.querySelector('.modal-content').style.transform = 'translateY(-50px)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const enroll = document.getElementById('enroll').value;
        const admission = document.getElementById('admission').value;
        const photo = document.getElementById('photo').files[0];

        const user = {
            name,
            email,
            phone,
            enroll,
            admission,
            photo: URL.createObjectURL(photo)
        };

        addUserCard(user);

        closeModal();

        userForm.reset();
    });

    function addUserCard(user) {
        const li = document.createElement('li');
        li.classList.add('user-card');

        const img = document.createElement('img');
        img.src = user.photo;
        li.appendChild(img);

        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');

        const nameSpan = document.createElement('span');
        nameSpan.textContent = user.name;
        userInfo.appendChild(nameSpan);

        const emailSpan = document.createElement('span');
        emailSpan.textContent = user.email;
        userInfo.appendChild(emailSpan);

        const phoneSpan = document.createElement('span');
        phoneSpan.textContent = user.phone;
        userInfo.appendChild(phoneSpan);

        const enrollSpan = document.createElement('span');
        enrollSpan.textContent = user.enroll;
        userInfo.appendChild(enrollSpan);

        const admissionSpan = document.createElement('span');
        admissionSpan.textContent = user.admission;
        userInfo.appendChild(admissionSpan);

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');
        actionsDiv.style.display = "flex"
        actionsDiv.style.alignItems = "center"
        actionsDiv.style.gap = "10px"
        console.log(actionsDiv);
        
        const moreBtn = document.createElement('button');
        const moreImg = document.createElement('img')
        moreImg.src = '../images/more-img.svg'
        moreImg.style.width = '19px';
        moreImg.style.height = '4px';
        moreImg.style.borderRadius = '0'        
        moreBtn.appendChild(moreImg)
        actionsDiv.appendChild(moreBtn);

        const editBtn = document.createElement('button');
        const editImg = document.createElement('img')
        editImg.src = '../images/edit-img.svg'
        editImg.style.width = '19px';
        editImg.style.height = '19px';
        editImg.style.borderRadius = '0'
        editBtn.appendChild(editImg)
        actionsDiv.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        const deleteImg = document.createElement('img')
        deleteImg.src = '../images/delete-img.svg'
        deleteImg.style.width = '16px ';
        deleteImg.style.height = '18px';
        deleteImg.style.borderRadius = '0'
        deleteBtn.appendChild(deleteImg)
        deleteBtn.addEventListener('click', () => {
            userList.removeChild(li);
        });
        actionsDiv.appendChild(deleteBtn);
        userInfo.appendChild(actionsDiv);

        li.appendChild(userInfo);
        userList.appendChild(li);
    }
});
