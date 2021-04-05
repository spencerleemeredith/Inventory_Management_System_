class AppStorage{


    storeToken(token){
        localStorage.setItem('token',token);
    }


storeToken(user){
        localStorage.setItem('user',user);
}

store(token,user){
    this.storeToken(token)
    this.storeToken(user)


}

clear(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}

    getToken(){

        localStorage.getItem(token)
    }

    getUser(){
        localStorage.getItem('user');
    }

}



export default AppStorage = new AppStorage();