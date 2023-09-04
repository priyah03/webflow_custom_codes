<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HubSpot Form Modal</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button id="openModalBtn">Email me the free Contract Risk Asssessment Checklist</button>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" id="closeModalBtn">&times;</span>
            <!-- HubSpot Form Code Goes Here -->
            <script type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
            <script>
                hbspt.forms.create({
                    portalId: '7712708',
                    formId: 'd2a4a763-2f80-4015-804e-baf7fd3c0140',
                    target: '#hubspot-form',
										region: "na1",
                });
            </script>
            <div id="hubspot-form"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

<style>
/* styles.css */
.modal {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
}

.modal-content {
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    position: relative;
}

.close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
}

button#openModalBtn {
    padding: 8px 48px;
    background-color: #21307A;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4;
}
</style>

<script>
// script.js
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

</script>
