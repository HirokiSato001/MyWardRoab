// This is a JavaScript file
class User{
  // コンストラクタ
  constructor(mailAddress,nickName,age){
    this.mailAddress = mailAddress;
    this.nickName = nickName;
    this.age = age;
    this.password = "aaaa";
    this.gender;
  }
  test(){
    var MC = monaca.cloud;
    var email = this.mailAddress;
    var password = this.password;
    var age = this.age;
    var nickName = this.nickName;
    console.log(MC);
    
    MC.User.register(email, password,{age:age,nickName:nickName}).done(function(){
        console.log('Registration is success!' + MC.User._oid);        
        document.getElementById('nav').pushPage('menu.html', {});
      })
      .fail(function(err)
      {
        console.log('FAILED');
        alert('Registration failed!');
        console.error(JSON.stringify(err));
      });
    }


  getNickName(){
    return this.nickName;
  }

  setGender(gender){
    this.gender = gender;
  }  
  getGender(){
    return this.gender;
  }  
  saveUserInfo(){

    localStorage.setItem('userInfo', JSON.stringify({
                nickName:this.nickName,
                age: this.age
              }));

  }

  showStorage() {
    var li,text, nameList;
    // clearNodes(); 
    nameList = JSON.parse(localStorage.getItem('userInfo'));   
    for (var nameKey in nameList) {
      text = nameKey + " : " + nameList[nameKey];
      // console.log(text);
      alert(text);
    }
  }
  // clearStorage() {
  //   localStorage.clear();
  //   showStorage();
  // }
}