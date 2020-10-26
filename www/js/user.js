// This is a JavaScript file

class User{
  // コンストラクタ
  constructor(nickName,age){
    this.nickName = nickName;
    this.age = age;
    this.gender;
  }

  getNickName(){
    return this.age;
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