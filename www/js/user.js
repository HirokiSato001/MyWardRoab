// This is a JavaScript file
// グローバル変数定義
var mailAddress; // メールアドレス
var password; // パスワード
var nickName; // ニックネーム
var birthDay; // 生年月日
var year; // 年
var month; // 月
var day; // 日
var gender; // 性別
var height; // 身長

// ニフクラmobile backendのキー設定
// API key.
var applicationKey    = "a5b0d94a415cb1c985e0766684fb926608305759441c8777962112ea428df5ae";
var clientKey = "c0d33b2d67b4aeb9e608b6c2774965128e10e2c267e06c19654032e4a8f1de2e";
// SDK initialization.
var ncmb = new NCMB(applicationKey, clientKey);  
var currentUser = ncmb.User.getCurrentUser();

class User {
  // コンストラクタ
  constructor() {
    // ログイン済みの場合
    if (currentUser) {
      console.log("new User()ログイン済み");
      mailAddress = currentUser.get("mailAddress")
      password = currentUser.get("password")
      nickName = currentUser.get("nickName")
      birthDay = currentUser.get("birthDay")
      year = currentUser.get("year")
      month = currentUser.get("month")
      day = currentUser.get("day")
      gender = currentUser.get("gender")
      height = currentUser.get("height")
      // ログ出力
      console.log("address    : " + address);
      console.log("nickName   : " + nickName);
      console.log("birthYear  :" + year);
      console.log("birthMonth :" + month);
      console.log("birthDay   :" + day);
      console.log("gender     :" + gender);
      console.log("height     :" + height);
      console.log("password   :" + password);
    } else {
      console.log("new User()未ログイン");
    }
  }

  // ユーザ登録
  userRegist(argMailAddress, argPassword, argNickName, argYear, argMonth, argDay, argGender, argHeight) {
    // ユーザ登録情報を設定

    var user = new ncmb.User();
    user.set("userName", argMailAddress) // ユーザ名
        .set("password", argPassword) /* パスワード */
        .set("mailAddress",argMailAddress)// メールアドレス
        .set("password",argPassword)// パスワード
        .set("nickName",argNickName)// ニックネーム
        .set("birthDay",argYear + '' +  argMonth + '' + argDay)// 生年月日
        .set("year",argYear)// 年
        .set("month",argMonth)// 月
        .set("day",argDay)// 日
        .set("gender",argGender)// 性別
        .set("height",argHeight);// 身長

        
    // ユーザーの新規登録処理
    user.signUpByAccount()
    .then(function(){
      // 登録後処理
      console.log('Registration is success!' + argNickName);
      // ログイン処理
      ncmb.User.login(argNickName, argPassword)
          .then(function(data){
            // ログイン後処理
            console.log("login Success");
          })
          .catch(function(err){
            // エラー処理
          });
    })
    .catch(function(err){
      // エラー処理
      console.log('Registration failed!');
      alert('Registration failed!');
    });    
  }


  /** バックエンドのユーザからmailAddressを取得し、グローバル変数に設定する*/
  /** mailAddressのsetter */
  setMailAddress(argMailAddress) {
    // ログインユーザからmailAddressプロパティ値を更新    
    currentUser.set("mailAddress", argMailAddress)
      .update()
      .then(function(obj) {
        // 更新がうまくいった時
        console.log("Success. Change userName to " + argMailAddress);
      })
      .catch(function(error) {
        // エラーの時
        alert("Failed. Change mailAddress.");
      });
    // グローバル変数:mailAddressを更新
    mailAddress = argMailAddress;
  }
  /** バックエンドのユーザからpasswordを取得し、グローバル変数に設定する*/
  /** passwordのsetter */
  setPassword(argPassword) {
    // ログインユーザからpasswordプロパティ値を更新    
    currentUser.set("password", argPassword)
      .update()
      .then(function(obj) {
        // 更新がうまくいった時
        console.log("Success. Change userName to " + argPassword);
      })
      .catch(function(error) {
        // エラーの時
        alert("Failed. Change password.");
      });
    // グローバル変数:passwordを更新
    password = argPassword;
  }
  /** バックエンドのユーザからnickNameを取得し、グローバル変数に設定する*/
  /** nickNameのsetter */
  setNickName(argNickName) {
    // ログインユーザからnickNameプロパティ値を更新    
    currentUser.set("nickName", argNickName)
      .update()
      .then(function(obj) {
        // 更新がうまくいった時
        console.log("Success. Change userName to " + argNickName);
      })
      .catch(function(error) {
        // エラーの時
        alert("Failed. Change nickName.");
      });
    // グローバル変数:nickNameを更新
    nickName = argNickName;
  }
  /** バックエンドのユーザからbirthDayを取得し、グローバル変数に設定する*/
  /** birthDayのsetter */
  setBirthDay(argBirthDay) {
    // ログインユーザからbirthDayプロパティ値を更新    
    currentUser.set("birthDay", argBirthDay)
      .update()
      .then(function(obj) {
        // 更新がうまくいった時
        console.log("Success. Change userName to " + argBirthDay);
      })
      .catch(function(error) {
        // エラーの時
        alert("Failed. Change birthDay.");
      });
    // グローバル変数:birthDayを更新
    birthDay = argBirthDay;
  }
  /** バックエンドのユーザからyearを取得し、グローバル変数に設定する*/
  /** yearのsetter */
  setYear(argYear) {
    // ログインユーザからyearプロパティ値を更新    
    currentUser.set("year", argYear)
      .update()
      .then(function(obj) {
        // 更新がうまくいった時
        console.log("Success. Change userName to " + argYear);
      })
      .catch(function(error) {
        // エラーの時
        alert("Failed. Change year.");
      });
    // グローバル変数:yearを更新
    year = argYear;
  }
  /** バックエンドのユーザからmonthを取得し、グローバル変数に設定する*/
  /** monthのsetter */
  setMonth(argMonth) {
    // ログインユーザからmonthプロパティ値を更新    
    currentUser.set("month", argMonth)
      .update()
      .then(function(obj) {
        // 更新がうまくいった時
        console.log("Success. Change userName to " + argMonth);
      })
      .catch(function(error) {
        // エラーの時
        alert("Failed. Change month.");
      });
    // グローバル変数:monthを更新
    month = argMonth;
  }
  /** バックエンドのユーザからdayを取得し、グローバル変数に設定する*/
  /** dayのsetter */
  setDay(argDay) {
    // ログインユーザからdayプロパティ値を更新    
    currentUser.set("day", argDay)
      .update()
      .then(function(obj) {
        // 更新がうまくいった時
        console.log("Success. Change userName to " + argDay);
      })
      .catch(function(error) {
        // エラーの時
        alert("Failed. Change day.");
      });
    // グローバル変数:dayを更新
    day = argDay;
  }
  /** バックエンドのユーザからgenderを取得し、グローバル変数に設定する*/
  /** genderのsetter */
  setGender(argGender) {
    // ログインユーザからgenderプロパティ値を更新    
    currentUser.set("gender", argGender)
      .update()
      .then(function(obj) {
        // 更新がうまくいった時
        console.log("Success. Change userName to " + argGender);
      })
      .catch(function(error) {
        // エラーの時
        alert("Failed. Change gender.");
      });
    // グローバル変数:genderを更新
    gender = argGender;
  }
  /** バックエンドのユーザからheightを取得し、グローバル変数に設定する*/
  /** heightのsetter */
  setHeight(argHeight) {
    // ログインユーザからheightプロパティ値を更新    
    currentUser.set("height", argHeight)
      .update()
      .then(function(obj) {
        // 更新がうまくいった時
        console.log("Success. Change userName to " + argHeight);
      })
      .catch(function(error) {
        // エラーの時
        alert("Failed. Change height.");
      });
    // グローバル変数:heightを更新
    height = argHeight;
  }

  /** メールアドレスのgetter */
  getMailAddress() {
    // グローバル変数:mailaddressの値を返却
    return mailAddress;
  }
  /** ニックネームのgetter */
  getNickName() {
    // グローバル変数:nickNameの値を返却
    return nickName;
  }
  /** 生年月日のgetter */
  getBirthDay() {
    // グローバル変数:birthDayの値を返却
    return birthDay;
  }
  /** 年のgetter */
  getYear() {
    // グローバル変数:yearの値を返却
    return year;
  }
  /** 月のgetter */
  getMonth() {
    // グローバル変数:monthの値を返却
    return month;
  }
  /** 日のgetter */
  getDay() {
    // グローバル変数:dayの値を返却
    return day;
  }
  /** 性別のgetter */
  getGender() {
    // グローバル変数:genderの値を返却
    return gender;
  }
  /** 身長のgetter */
  getHeight() {
    // グローバル変数:heightの値を返却
    return height;
  }
  /** パスワードのgetter */
  getPassword() {
    // グローバル変数:passwordの値を返却
    return password;
  }

  // ローカルストレージ
  saveUserInfo() {
    localStorage.setItem('userInfo', JSON.stringify({
      nickName: this.nickName,
      age: this.age
    }));

  }
  showStorage() {
    var li, text, nameList;
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