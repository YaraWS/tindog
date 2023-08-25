// Creating of Dog Class and Exporting it

class Dog {
    constructor(data){
        Object.assign(this,data)
 }
    
    setMatchStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true      
    } 
    
    getDogHtml() {
        const { avatar, name, age, bio} = this
        return  `
            <div class="feature-suggestion">
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
                <img src="/images/badge-like.png" class="badge display-like">
                <img src="/images/badge-nope.png" class="badge display-nope"> 
               
            </div>`       
    }   
}


export default Dog


