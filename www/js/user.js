// This is a JavaScript file

class User{
  // コンストラクタ
  constructor(name,age){
    this.nickName = name;
    this.age = age;
    this.test;
  }

  getNickName(){
    return this.age;
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
      console.log(text);
      // alert(text);
    }
  }
  // clearStorage() {
  //   localStorage.clear();
  //   showStorage();
  // }
}