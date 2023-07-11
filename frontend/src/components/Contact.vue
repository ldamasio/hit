<template>
    <div class="container_general">
        <div class="container_title">
            Contato
            <br>
            <img alt="" class="title_decoration" src="../assets/title-decoration.png">
        </div>
        <div class="container_content">
            <form>
                <div class="row">
                    <div class="column_name">
                        <input 
                            class="form name" 
                            id="name" 
                            type="text" 
                            placeholder="Nome*"
                            v-model="nameValue"
                        >

                    </div>
                    <div class="column_email">
                        <input 
                            class="form email" 
                            id="email" 
                            type="text" 
                            placeholder="Email*"
                            v-model="emailValue"
                        >
                    </div>
                </div>
                <textarea
                    placeholder="Mensagem*"
                    v-model="msgValue"
                >
                </textarea>
                <div class="row button_div">
                    <button @click="submitForm">ENVIAR</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IntroductionScreen',
    data() {
        return {
            nameValue: '',
            emailValue: '',
            msgValue: '',
        }
    },
    methods: {
        submitForm() {
            if (!this.nameValue || !this.emailValue || !this.msgValue) {
                alert('Todos os campos devem ser preenchidos!');
                return;
            }
            // Do something with the input value
            console.log(this.nameValue);
            console.log(this.emailValue);
            console.log(this.msgValue);
        },
    },
}
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.container_content {
    margin: auto auto;
    padding: 33px;
    width: 63%;
    border-radius: 8px;
    background-color: #ea916b;
    color: white;
    font-family: 'Open Sans';
    text-align: left;
}

.container_general {
    padding: 32px;
}

.container_title {
    margin-bottom: 14px;
    color: white;
    font-size: 20px;
}

.title_decoration {
    width: 100px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.column_name {
    float: left;
    width: 50%;
    text-align:left
}
.column_email {
    float: left;
    width: 50%;
    text-align:right
}
.name { text-align: left}
.email { text-align: left}
input {
    font-size: 12px;
    width: 90%;
    padding: 0 1%;
    border-radius: 4px;
    border: 0;
    height: 30px;
}
textarea {
    text-align:left;
    margin-top: 20px;
    font-size: 12px;
    width: 97%;
    padding: 10px;
    border-radius: 4px;
    border: 0;
    height: 80px;
    color: gray;
}
.button_div {
    text-align: center;
}
button {
    width:140px;
    background-color: #2d2d2d;
    border: none;
    border-radius: 8px;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin-top:20px;
    cursor: pointer;
}
</style>
